import { prisma } from "../../lib/prisma.js";
import { HttpError } from "../core/httpError.js";

export class UserService {
    async create(body: any) {
        const { 
            name, 
            email, 
            phone,
            github,
            linkedin,
            quote
        } = body;

        if (!name || !email || !phone || !github || !linkedin || !quote) {
            throw new HttpError("Name, email, and password are required", 400);
        }

        await prisma.user.create({
            data: {
                name,
                email,
                phone,
                github,
                linkedin,
                quote
            }
        })
    }

    async getUser() {
        const users = await prisma.user.findMany();
        return users[0];
    }

    async update(body: any) {
        const { 
            name, 
            email, 
            phone,
            github,
            linkedin,
            quote
        } = body;

        await prisma.user.update({
            where: {
                email
            },
            data: {
                name,
                email,
                phone,
                github,
                linkedin,
                quote
            }
        })
    }
}
    