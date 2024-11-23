/*
  Warnings:

  - You are about to drop the column `salaId` on the `Alumnos` table. All the data in the column will be lost.
  - Added the required column `alumnoid` to the `Salas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Alumnos" DROP CONSTRAINT "Alumnos_salaId_fkey";

-- AlterTable
ALTER TABLE "Alumnos" DROP COLUMN "salaId";

-- AlterTable
ALTER TABLE "Salas" ADD COLUMN     "alumnoid" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Asistencia" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "alumnoId" TEXT NOT NULL,
    "salaId" TEXT NOT NULL,

    CONSTRAINT "Asistencia_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Salas" ADD CONSTRAINT "Salas_alumnoid_fkey" FOREIGN KEY ("alumnoid") REFERENCES "Alumnos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asistencia" ADD CONSTRAINT "Asistencia_alumnoId_fkey" FOREIGN KEY ("alumnoId") REFERENCES "Alumnos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asistencia" ADD CONSTRAINT "Asistencia_salaId_fkey" FOREIGN KEY ("salaId") REFERENCES "Salas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
