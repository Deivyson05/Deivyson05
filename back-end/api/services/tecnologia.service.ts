import { prisma } from "../../lib/prisma.js";
import { HttpError } from "../core/httpError.js";

export class TecnologiaService {
    async create(body: any) {
        const { 
            name, 
            level
        } = body;

        if (!name || !level) {
            throw new HttpError("Name and level are required", 400);
        }

        await prisma.tecnologia.create({
            data: {
                name,
                level
            }
        })
    }

    async listAll() {
        const tecnologias = await prisma.tecnologia.findMany();
        return tecnologias;
    }

    async update(body: any) {
        const { 
            name, 
            level
        } = body;

        await prisma.tecnologia.update({
            where: {
                name
            },
            data: {
                name,
                level
            }
        })
    }

    async delete(name: string) {
        if (!name) {
            throw new HttpError("Id is required", 400);
        }

        await prisma.tecnologia.delete({
            where: {
                name
            }
        })
    }

    async listFromProject(body: any) {
        const { 
            idList
        } = body;

        const tecnologias = await prisma.tecnologia.findMany({
            where: {
                id: {
                    in: idList
                }
            }
        });
        return tecnologias;
    }
}
    