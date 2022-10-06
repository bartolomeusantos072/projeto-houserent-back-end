/*
  Warnings:

  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `House` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Photos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AddressToHouse` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AddressToUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DriverToPhotos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_HouseToPhotos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PhotosToService` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `services` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `brand` to the `driver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `color` to the `driver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model` to the `driver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `driver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `driver` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "House" DROP CONSTRAINT "House_proprietaryId_fkey";

-- DropForeignKey
ALTER TABLE "_AddressToHouse" DROP CONSTRAINT "_AddressToHouse_A_fkey";

-- DropForeignKey
ALTER TABLE "_AddressToHouse" DROP CONSTRAINT "_AddressToHouse_B_fkey";

-- DropForeignKey
ALTER TABLE "_AddressToUser" DROP CONSTRAINT "_AddressToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_AddressToUser" DROP CONSTRAINT "_AddressToUser_B_fkey";

-- DropForeignKey
ALTER TABLE "_DriverToPhotos" DROP CONSTRAINT "_DriverToPhotos_A_fkey";

-- DropForeignKey
ALTER TABLE "_DriverToPhotos" DROP CONSTRAINT "_DriverToPhotos_B_fkey";

-- DropForeignKey
ALTER TABLE "_HouseToPhotos" DROP CONSTRAINT "_HouseToPhotos_A_fkey";

-- DropForeignKey
ALTER TABLE "_HouseToPhotos" DROP CONSTRAINT "_HouseToPhotos_B_fkey";

-- DropForeignKey
ALTER TABLE "_PhotosToService" DROP CONSTRAINT "_PhotosToService_A_fkey";

-- DropForeignKey
ALTER TABLE "_PhotosToService" DROP CONSTRAINT "_PhotosToService_B_fkey";

-- DropForeignKey
ALTER TABLE "driver" DROP CONSTRAINT "driver_userId_fkey";

-- DropForeignKey
ALTER TABLE "services" DROP CONSTRAINT "services_userId_fkey";

-- DropIndex
DROP INDEX "services_service_userId_key";

-- AlterTable
ALTER TABLE "driver" ADD COLUMN     "brand" TEXT NOT NULL,
ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "model" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL,
ADD COLUMN     "year" TEXT NOT NULL;

-- DropTable
DROP TABLE "Address";

-- DropTable
DROP TABLE "House";

-- DropTable
DROP TABLE "Photos";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "_AddressToHouse";

-- DropTable
DROP TABLE "_AddressToUser";

-- DropTable
DROP TABLE "_DriverToPhotos";

-- DropTable
DROP TABLE "_HouseToPhotos";

-- DropTable
DROP TABLE "_PhotosToService";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
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
    "county" TEXT NOT NULL,
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
    "proprietaryId" INTEGER NOT NULL,

    CONSTRAINT "houses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "addressHouse" (
    "id" SERIAL NOT NULL,
    "state" TEXT NOT NULL,
    "county" TEXT NOT NULL,
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
CREATE TABLE "photosService" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "serviceId" INTEGER NOT NULL,

    CONSTRAINT "photosService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "photosDriver" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "driverId" INTEGER NOT NULL,

    CONSTRAINT "photosDriver_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "houses_iptu_key" ON "houses"("iptu");

-- CreateIndex
CREATE UNIQUE INDEX "services_userId_key" ON "services"("userId");

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "houses" ADD CONSTRAINT "houses_proprietaryId_fkey" FOREIGN KEY ("proprietaryId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "addressHouse" ADD CONSTRAINT "addressHouse_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "houses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "photosHouse" ADD CONSTRAINT "photosHouse_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "houses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "services" ADD CONSTRAINT "services_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "photosService" ADD CONSTRAINT "photosService_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "driver" ADD CONSTRAINT "driver_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "photosDriver" ADD CONSTRAINT "photosDriver_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "driver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
