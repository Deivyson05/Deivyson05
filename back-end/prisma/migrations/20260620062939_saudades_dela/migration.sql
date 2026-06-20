/*
  Warnings:

  - Added the required column `imgUrl` to the `Projeto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `linkProjeto` to the `Projeto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `linkRepo` to the `Projeto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Projeto" ADD COLUMN     "imgUrl" TEXT NOT NULL,
ADD COLUMN     "linkProjeto" TEXT NOT NULL,
ADD COLUMN     "linkRepo" TEXT NOT NULL;
