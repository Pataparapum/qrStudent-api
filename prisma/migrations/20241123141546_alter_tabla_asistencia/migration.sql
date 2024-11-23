/*
  Warnings:

  - Added the required column `asistencia` to the `Asistencia` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Asistencia" ADD COLUMN     "asistencia" BOOLEAN NOT NULL,
ADD COLUMN     "justificado" BOOLEAN;
