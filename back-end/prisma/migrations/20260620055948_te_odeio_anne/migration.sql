/*
  Warnings:

  - You are about to drop the column `tec` on the `Projeto` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Projeto" DROP COLUMN "tec";

-- CreateTable
CREATE TABLE "ProjetoTecnologia" (
    "id" SERIAL NOT NULL,
    "projetoId" TEXT NOT NULL,
    "tecnologiaId" TEXT NOT NULL,

    CONSTRAINT "ProjetoTecnologia_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProjetoTecnologia" ADD CONSTRAINT "ProjetoTecnologia_projetoId_fkey" FOREIGN KEY ("projetoId") REFERENCES "Projeto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjetoTecnologia" ADD CONSTRAINT "ProjetoTecnologia_tecnologiaId_fkey" FOREIGN KEY ("tecnologiaId") REFERENCES "Tecnologia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
