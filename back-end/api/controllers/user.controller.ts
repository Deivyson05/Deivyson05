import { Controller } from "../decorators/controller.js";
import { Get, Post, Put, Patch, Delete } from "../decorators/routes.js";
import { UserService } from "../services/user.service.js";
import { HttpError } from "../core/httpError.js";
import { Request, Response } from "express";

@Controller("/user")
export class UserController {
    service: UserService
    constructor() {
        this.service = new UserService();
    }
    @Get("/")
    async getUser(req: Request, res: Response) {
        try {
            const User = await this.service.getUser();
            return res.json(User);
        } catch (err: HttpError | any) {
            console.error("Error:", err);
            return res.status(err.status || 500).json({ error: err.message });
        }
    }

    @Post("/")
    async createUser(req: Request, res: Response) {
        try {
            const User = await this.service.create(req.body);
            return res.json({ message: "User criado com sucesso" });
        } catch (err: HttpError | any) {
            console.error("Error:", err);
            return res.status(err.status || 500).json({ error: err.message });
        }
    }

    @Put("/")
    async updateUser(req: Request, res: Response) {
        try {
            const User = await this.service.update(req.body);
            return res.json({ message: "User editado com sucesso" });
        } catch (err: HttpError | any) {
            console.error("Error:", err);
            return res.status(err.status || 500).json({ error: err.message });
        }
    }

    
}
    