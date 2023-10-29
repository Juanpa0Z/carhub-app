/*
  Warnings:

  - The primary key for the `CarsMakes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `carMakeId` column on the `CarsMakes` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `CarsModels` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `carModelId` column on the `CarsModels` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `carsMakesCarMakeId` to the `Cars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `carsModelsCarModelId` to the `Cars` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Cars" DROP CONSTRAINT "Cars_carsMakesCarMakeId_fkey";

-- DropForeignKey
ALTER TABLE "Cars" DROP CONSTRAINT "Cars_carsModelsCarModelId_fkey";

-- AlterTable
ALTER TABLE "Cars" DROP COLUMN "carsMakesCarMakeId",
ADD COLUMN     "carsMakesCarMakeId" INTEGER NOT NULL,
DROP COLUMN "carsModelsCarModelId",
ADD COLUMN     "carsModelsCarModelId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "CarsMakes" DROP CONSTRAINT "CarsMakes_pkey",
DROP COLUMN "carMakeId",
ADD COLUMN     "carMakeId" SERIAL NOT NULL,
ADD CONSTRAINT "CarsMakes_pkey" PRIMARY KEY ("carMakeId");

-- AlterTable
ALTER TABLE "CarsModels" DROP CONSTRAINT "CarsModels_pkey",
DROP COLUMN "carModelId",
ADD COLUMN     "carModelId" SERIAL NOT NULL,
ADD CONSTRAINT "CarsModels_pkey" PRIMARY KEY ("carModelId");

-- CreateIndex
CREATE UNIQUE INDEX "CarsMakes_carMakeId_key" ON "CarsMakes"("carMakeId");

-- CreateIndex
CREATE UNIQUE INDEX "CarsModels_carModelId_key" ON "CarsModels"("carModelId");

-- AddForeignKey
ALTER TABLE "Cars" ADD CONSTRAINT "Cars_carsMakesCarMakeId_fkey" FOREIGN KEY ("carsMakesCarMakeId") REFERENCES "CarsMakes"("carMakeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cars" ADD CONSTRAINT "Cars_carsModelsCarModelId_fkey" FOREIGN KEY ("carsModelsCarModelId") REFERENCES "CarsModels"("carModelId") ON DELETE RESTRICT ON UPDATE CASCADE;
