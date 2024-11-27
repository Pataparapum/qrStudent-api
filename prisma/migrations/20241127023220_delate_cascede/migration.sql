-- DropForeignKey
ALTER TABLE "Alumnos" DROP CONSTRAINT "Alumnos_userId_fkey";

-- DropForeignKey
ALTER TABLE "Asistencia" DROP CONSTRAINT "Asistencia_alumnoId_fkey";

-- DropForeignKey
ALTER TABLE "Asistencia" DROP CONSTRAINT "Asistencia_salaId_fkey";

-- DropForeignKey
ALTER TABLE "Salas" DROP CONSTRAINT "Salas_alumnoid_fkey";

-- AddForeignKey
ALTER TABLE "Salas" ADD CONSTRAINT "Salas_alumnoid_fkey" FOREIGN KEY ("alumnoid") REFERENCES "Alumnos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asistencia" ADD CONSTRAINT "Asistencia_alumnoId_fkey" FOREIGN KEY ("alumnoId") REFERENCES "Alumnos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asistencia" ADD CONSTRAINT "Asistencia_salaId_fkey" FOREIGN KEY ("salaId") REFERENCES "Salas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alumnos" ADD CONSTRAINT "Alumnos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
