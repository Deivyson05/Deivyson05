import { prisma } from "../../lib/prisma.js";
import { HttpError } from "../core/httpError.js";

export class ProjetoService {

    async create(body: any) {
        const {
            title,
            desc,
            about,
            concluido,
            tec
        } = body;

        if (!title || !desc || !about || !tec) {
            throw new HttpError("Title and description are required", 400);
        }

        await prisma.projeto.create({
            data: {
                title,
                desc,
                about,
                concluido,
                tec: {
                    create: tec.map((tecId: string) => ({
                        tecnologia: {
                            connect: {
                                id: tecId
                            }
                        }
                    }))
                }
            },
            include: {
                tec: {
                    include: {
                        tecnologia: true
                    }
                }
            }
        })
    }

    async listAll() {
        const projetos = await prisma.projeto.findMany();
        return projetos;
    }

    async delete(id: string) {
        if (!id) {
            throw new HttpError("Id is required", 400);
        }

        await prisma.projeto.delete({
            where: {
                id
            }
        })
    }

    async update(body: any) {
        const {
            id,
            title,
            desc,
            about,
            concluido
        } = body;

        await prisma.projeto.update({
            where: {
                id
            },
            data: {
                title,
                desc,
                about,
                concluido
            }
        })
    }
}
