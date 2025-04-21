-- CreateEnum
CREATE TYPE "Level" AS ENUM ('LEVEL_ONE', 'LEVEL_TWO', 'LEVEL_THREE', 'LEVEL_FOUR', 'LEVEL_FIVE', 'LEVEL_SIX');

-- CreateTable
CREATE TABLE "Teacher" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "levelQuran" "Level" NOT NULL,
    "phoneWhatsapp" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "degree" INTEGER NOT NULL,
    "ranking" INTEGER NOT NULL,
    "teacherId" INTEGER NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
