-- AlterTable
ALTER TABLE "Projeto" ADD COLUMN     "impressoes" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "impressoesCodigo" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "impressoesProjeto" INTEGER NOT NULL DEFAULT 0;
