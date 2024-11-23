-- CreateTable
CREATE TABLE "Salas" (
    "id" TEXT NOT NULL,
    "curso" TEXT NOT NULL,
    "asistencia" TEXT NOT NULL,
    "alumnoId" TEXT NOT NULL,

    CONSTRAINT "Salas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Salas" ADD CONSTRAINT "Salas_alumnoId_fkey" FOREIGN KEY ("alumnoId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
