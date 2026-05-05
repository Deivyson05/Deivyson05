import { Controller } from "../decorators/controller.js";
import { Get, Post, Put, Patch, Delete } from "../decorators/routes.js";
import { ProjetoService } from "../services/projeto.service.js";
import { HttpError } from "../core/httpError.js";
import { Request, Response } from "express";

@Controller("/projeto")
export class ProjetoController {
    private service: ProjetoService;
    constructor() {
        this.service = new ProjetoService();
    }
    @Get("/")
    async getProjeto(req: Request, res: Response) {
        try {
            const Projeto = await this.service.listAll();
            return res.json(Projeto);
        } catch (err: HttpError | any) {
            console.error("Error:", err);
            return res.status(err.status || 500).json({ error: err.message });
        }
    }

    @Post("/")
    async createProjeto(req: Request, res: Response) {
        try {
            const Projeto = await this.service.create(req.body);
            return res.json({ message: "Projeto criado com sucesso" });
        } catch (err: HttpError | any) {
            console.error("Error:", err);
            return res.status(err.status || 500).json({ error: err.message });
        }
    }

    @Put("/")
    async update(req: Request, res: Response) {
        try {
            const Projeto = await this.service.update(req.body);
            return res.json({ message: "Projeto editado com sucesso" });
        } catch (err: HttpError | any) {
            console.error("Error:", err);
            return res.status(err.status || 500).json({ error: err.message });
        }
    }

    @Delete("/:id")
    async deleteProjeto(req: Request, res: Response) {
        try {
            const Projeto = await this.service.delete(req.params.id);
            return res.json({ message: "Projeto deletado com sucesso" });
        } catch (err: HttpError | any) {
            console.error("Error:", err);
            return res.status(err.status || 500).json({ error: err.message });
        }
    }
}
    