import express from "express";
import cors from "cors";
import "dotenv/config";
import { prisma } from "../lib/prisma";
import { ProjetoController } from "./controllers/projeto.controller";
import { registerRoutes } from "./core/router";
import { Control } from "node:child_process";
import { ControllerBase } from "./core/types";
import { UserController } from "./controllers/user.controller";
import { TecnologiaController } from "./controllers/tecnologia.controller";

const app: express.Application = express();
app.use(cors());
app.use(express.json());

app.use(express.static("src/public"));

const userController = new UserController();
const projetoController = new ProjetoController();
const tecnologiaController = new TecnologiaController();

registerRoutes(app, userController as ControllerBase);
registerRoutes(app, tecnologiaController as ControllerBase);
registerRoutes(app, projetoController as ControllerBase);

app.get("/", (req, res) => res.send("Hello World!"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Teste n1 ${port}`);
});