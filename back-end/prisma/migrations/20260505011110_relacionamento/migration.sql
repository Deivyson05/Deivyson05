/*
  Warnings:

  - You are about to drop the `_ProjetoToTecnologia` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Tecnologia` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "_ProjetoToTecnologia" DROP CONSTRAINT "_ProjetoToTecnologia_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProjetoToTecnologia" DROP CONSTRAINT "_ProjetoToTecnologia_B_fkey";

-- AlterTable
ALTER TABLE "Projeto" ADD COLUMN     "tec" TEXT[];

-- DropTable
DROP TABLE "_ProjetoToTecnologia";

-- CreateIndex
CREATE UNIQUE INDEX "Tecnologia_name_key" ON "Tecnologia"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
