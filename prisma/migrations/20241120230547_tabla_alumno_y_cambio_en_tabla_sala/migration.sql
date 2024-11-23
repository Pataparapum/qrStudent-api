/*
  Warnings:

  - You are about to drop the column `alumnoId` on the `Salas` table. All the data in the column will be lost.
  - You are about to drop the column `asistencia` on the `Salas` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Salas" DROP CONSTRAINT "Salas_alumnoId_fkey";

-- AlterTable
ALTER TABLE "Salas" DROP COLUMN "alumnoId",
DROP COLUMN "asistencia";

-- CreateTable
CREATE TABLE "Alumnos" (
    "id" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "salaId" TEXT NOT NULL,

    CONSTRAINT "Alumnos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Alumnos" ADD CONSTRAINT "Alumnos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alumnos" ADD CONSTRAINT "Alumnos_salaId_fkey" FOREIGN KEY ("salaId") REFERENCES "Salas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
