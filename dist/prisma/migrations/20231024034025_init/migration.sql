-- CreateTable
CREATE TABLE "Cars" (
    "cardId" TEXT NOT NULL,
    "carYear" INTEGER NOT NULL,
    "transmitionTypes" TEXT[],
    "driveTrains" TEXT[],
    "carDescription" TEXT NOT NULL,
    "carImageUrl" TEXT NOT NULL,
    "motorFuelTypes" TEXT[],
    "carAcceleration" TEXT NOT NULL,
    "accelarationTime" TEXT NOT NULL,
    "speedMax" TEXT NOT NULL,
    "averageConsumption" TEXT NOT NULL,
    "deviceCapacity" TEXT NOT NULL,
    "numberOfDoors" TEXT NOT NULL,
    "carDimensions" TEXT NOT NULL,
    "carTrunkVolume" TEXT NOT NULL,
    "carWeight" TEXT NOT NULL,
    "maximumPower" TEXT NOT NULL,
    "motorWatts" TEXT NOT NULL,
    "carsMakesCarMakeId" TEXT,
    "carsModelsCarModelId" TEXT,

    CONSTRAINT "Cars_pkey" PRIMARY KEY ("cardId")
);

-- CreateTable
CREATE TABLE "CarsMakes" (
    "carMakeId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CarsMakes_pkey" PRIMARY KEY ("carMakeId")
);

-- CreateTable
CREATE TABLE "CarsModels" (
    "carModelId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CarsModels_pkey" PRIMARY KEY ("carModelId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cars_cardId_key" ON "Cars"("cardId");

-- CreateIndex
CREATE UNIQUE INDEX "CarsMakes_carMakeId_key" ON "CarsMakes"("carMakeId");

-- CreateIndex
CREATE UNIQUE INDEX "CarsModels_carModelId_key" ON "CarsModels"("carModelId");

-- AddForeignKey
ALTER TABLE "Cars" ADD CONSTRAINT "Cars_carsMakesCarMakeId_fkey" FOREIGN KEY ("carsMakesCarMakeId") REFERENCES "CarsMakes"("carMakeId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cars" ADD CONSTRAINT "Cars_carsModelsCarModelId_fkey" FOREIGN KEY ("carsModelsCarModelId") REFERENCES "CarsModels"("carModelId") ON DELETE SET NULL ON UPDATE CASCADE;
