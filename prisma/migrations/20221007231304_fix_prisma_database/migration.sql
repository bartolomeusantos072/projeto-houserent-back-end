/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `address` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[houseId]` on the table `addressHouse` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "services_userId_key";

-- CreateIndex
CREATE UNIQUE INDEX "address_userId_key" ON "address"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "addressHouse_houseId_key" ON "addressHouse"("houseId");
