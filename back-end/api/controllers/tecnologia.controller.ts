import { Controller } from "../decorators/controller.js";
import { Get, Post, Put, Patch, Delete } from "../decorators/routes.js";
import { TecnologiaService } from "../services/tecnologia.service.js";
import { HttpError } from "../core/httpError.js";
import { Request, Response } from "express";

@Controller("/tecnologia")
export class TecnologiaController {
    service: TecnologiaService;
    constructor() {
        this.service = new TecnologiaService();
    }
    @Get("/")
    async listAll(req: Request, res: Response) {
        try {
            const Tecnologia = await this.service.listAll();
            return res.json(Tecnologia);
        } catch (err: HttpError | any) {
            console.error("Error:", err);
            return res.status(err.status || 500).json({ error: err.message });
        }
    }

    @Post("/")
    async create(req: Request, res: Response) {
        try {
            const Tecnologia = await this.service.create(req.body);
            return res.json({ message: "Tecnologia criado com sucesso" });
        } catch (err: HttpError | any) {
            console.error("Error:", err);
            return res.status(err.status || 500).json({ error: err.message });
        }
    }

    @Put("/")
    async update(req: Request, res: Response) {
        try {
            const Tecnologia = await this.service.update(req.body);
            return res.json({ message: "Tecnologia editado com sucesso" });
        } catch (err: HttpError | any) {
            console.error("Error:", err);
            return res.status(err.status || 500).json({ error: err.message });
        }
    }

    @Delete("/:name")
    async delete(req: Request, res: Response) {
        try {
            const Tecnologia = await this.service.delete(req.params.name);
            return res.json({ message: "Tecnologia deletado com sucesso" });
        } catch (err: HttpError | any) {
            console.error("Error:", err);
            return res.status(err.status || 500).json({ error: err.message });
        }
    }

    @Get("/list")
    async listFromProject(req: Request, res: Response) {
        try {
            const Tecnologia = await this.service.listFromProject(req.body);
            return res.json(Tecnologia);
        } catch (err: HttpError | any) {
            console.error("Error:", err);
            return res.status(err.status || 500).json({ error: err.message });
        }
    }
}
    