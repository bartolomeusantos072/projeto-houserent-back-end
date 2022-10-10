-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "cellphone" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "observation" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "address" (
    "id" SERIAL NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "suburb" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "complement" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "referencePoint" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "houses" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "dormitory" INTEGER NOT NULL,
    "bathrooms" INTEGER NOT NULL,
    "garage" INTEGER NOT NULL,
    "iptu" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "condominium" TEXT NOT NULL,
    "wather" TEXT NOT NULL,
    "light" TEXT NOT NULL,
    "availability" BOOLEAN NOT NULL,
    "proprietaryId" INTEGER NOT NULL,

    CONSTRAINT "houses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "addressHouse" (
    "id" SERIAL NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "suburb" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "complement" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "referencePoint" TEXT NOT NULL,
    "houseId" INTEGER NOT NULL,

    CONSTRAINT "addressHouse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "photosHouse" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "houseId" INTEGER NOT NULL,

    CONSTRAINT "photosHouse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "services" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "photosService" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "serviceId" INTEGER NOT NULL,

    CONSTRAINT "photosService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "driver" (
    "id" SERIAL NOT NULL,
    "vehicle" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "plate" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "driver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "photosDriver" (
    "id" SERIAL NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "driverId" INTEGER NOT NULL,

    CONSTRAINT "photosDriver_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "houses_iptu_key" ON "houses"("iptu");

-- CreateIndex
CREATE UNIQUE INDEX "services_userId_key" ON "services"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "driver_plate_key" ON "driver"("plate");

-- CreateIndex
CREATE UNIQUE INDEX "driver_plate_userId_key" ON "driver"("plate", "userId");

-- AddForeignKey
ALTER TABLE "address" ADD 
CONSTRAINT "address_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "houses" ADD CONSTRAINT "houses_proprietaryId_fkey" FOREIGN KEY ("proprietaryId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "addressHouse" ADD CONSTRAINT "addressHouse_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "houses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "photosHouse" ADD CONSTRAINT "photosHouse_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "houses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "services" ADD CONSTRAINT "services_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "photosService" ADD CONSTRAINT "photosService_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "driver" ADD CONSTRAINT "driver_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "photosDriver" ADD CONSTRAINT "photosDriver_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "driver"("id") ON DELETE CASCADE ON UPDATE CASCADE;
