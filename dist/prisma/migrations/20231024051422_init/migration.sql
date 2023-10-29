/*
  Warnings:

  - Added the required column `carMakeId` to the `CarsModels` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CarsModels" ADD COLUMN     "carMakeId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "CarsModels" ADD CONSTRAINT "CarsModels_carMakeId_fkey" FOREIGN KEY ("carMakeId") REFERENCES "CarsMakes"("carMakeId") ON DELETE RESTRICT ON UPDATE CASCADE;
