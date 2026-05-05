import fs from "fs";
import inquirer from "inquirer";
import path from "path";

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function novaEntidade() {
    const args = process.argv.slice(2);
    const nomeArg = args[0];

    const nomeLimpo = nomeArg?.trim();

    if (!nomeLimpo) {
        return console.log("❌ Informe o nome da entidade. Ex: npm run nova-entidade User");
    }

    if (!/^[A-Za-z]+$/.test(nomeLimpo)) {
        return console.log("❌ Nome inválido. Use apenas letras.");
    }

    const baseName = nomeLimpo.toLowerCase();

    const paths = {
        controller: path.join(__dirname, '../api/controllers', `${baseName}.controller.ts`),
        service: path.join(__dirname, '../api/services', `${baseName}.service.ts`),
        models: path.join(__dirname, '../api/models', `${baseName}.model.prisma`),
    };


    fs.writeFileSync(paths.controller, `import { Controller } from "../decorators/controller";
import { Get, Post, Put, Patch, Delete } from "../decorators/routes";
import { ${nomeLimpo}Service } from "../services/${baseName}.service.js";

@Controller("/${baseName}")
export class ${nomeLimpo}Controller {
    constructor() {
        this.service = new ${nomeLimpo}Service();
    }
    @Get("/")
    async get${nomeLimpo}() {
        try {
            const ${nomeLimpo} = await this.service.get${nomeLimpo}();
            return ${nomeLimpo};
        } catch (err: HttpError | any) {
            console.error("Error:", err);
            return res.status(err.status || 500).json({ error: err.message });
        }
    }
}
    `);
    fs.writeFileSync(paths.service, `import { prisma } from "../../lib/prisma.js";
import { HttpError } from "../core/httpError.js";

export class ${nomeLimpo}Service {
    async create(body: any) {
        //const { name, email, password } = body;

        //if (!name || !email || !password) {
        //    throw new HttpError("Name, email, and password are required", 400);
        //}

        //const ${baseName} = await prisma.${baseName}.create({
        //    data: {
        //        
        //    },
        //    include: {
        //        
        //    },
        //});
    }
}
    `);
    fs.writeFileSync(paths.models, `
model ${nomeLimpo} {
    id        String   @id @default(uuid())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
}

    `);

    console.log(`Entidade ${nomeLimpo} criada com sucesso!`);

}

novaEntidade();