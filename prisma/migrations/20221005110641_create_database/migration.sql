-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "cellphone" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "observation" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "House" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "proprietaryId" INTEGER NOT NULL,

    CONSTRAINT "House_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "services" (
    "id" SERIAL NOT NULL,
    "service" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "driver" (
    "id" SERIAL NOT NULL,
    "plate" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "driver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Photos" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Photos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_HouseToPhotos" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_DriverToPhotos" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_AddressToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_AddressToHouse" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_PhotosToService" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "services_service_userId_key" ON "services"("service", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "driver_plate_key" ON "driver"("plate");

-- CreateIndex
CREATE UNIQUE INDEX "driver_plate_userId_key" ON "driver"("plate", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "_HouseToPhotos_AB_unique" ON "_HouseToPhotos"("A", "B");

-- CreateIndex
CREATE INDEX "_HouseToPhotos_B_index" ON "_HouseToPhotos"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DriverToPhotos_AB_unique" ON "_DriverToPhotos"("A", "B");

-- CreateIndex
CREATE INDEX "_DriverToPhotos_B_index" ON "_DriverToPhotos"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AddressToUser_AB_unique" ON "_AddressToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_AddressToUser_B_index" ON "_AddressToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AddressToHouse_AB_unique" ON "_AddressToHouse"("A", "B");

-- CreateIndex
CREATE INDEX "_AddressToHouse_B_index" ON "_AddressToHouse"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PhotosToService_AB_unique" ON "_PhotosToService"("A", "B");

-- CreateIndex
CREATE INDEX "_PhotosToService_B_index" ON "_PhotosToService"("B");

-- AddForeignKey
ALTER TABLE "House" ADD CONSTRAINT "House_proprietaryId_fkey" FOREIGN KEY ("proprietaryId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "services" ADD CONSTRAINT "services_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "driver" ADD CONSTRAINT "driver_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HouseToPhotos" ADD CONSTRAINT "_HouseToPhotos_A_fkey" FOREIGN KEY ("A") REFERENCES "House"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HouseToPhotos" ADD CONSTRAINT "_HouseToPhotos_B_fkey" FOREIGN KEY ("B") REFERENCES "Photos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DriverToPhotos" ADD CONSTRAINT "_DriverToPhotos_A_fkey" FOREIGN KEY ("A") REFERENCES "driver"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DriverToPhotos" ADD CONSTRAINT "_DriverToPhotos_B_fkey" FOREIGN KEY ("B") REFERENCES "Photos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AddressToUser" ADD CONSTRAINT "_AddressToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Address"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AddressToUser" ADD CONSTRAINT "_AddressToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AddressToHouse" ADD CONSTRAINT "_AddressToHouse_A_fkey" FOREIGN KEY ("A") REFERENCES "Address"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AddressToHouse" ADD CONSTRAINT "_AddressToHouse_B_fkey" FOREIGN KEY ("B") REFERENCES "House"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PhotosToService" ADD CONSTRAINT "_PhotosToService_A_fkey" FOREIGN KEY ("A") REFERENCES "Photos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PhotosToService" ADD CONSTRAINT "_PhotosToService_B_fkey" FOREIGN KEY ("B") REFERENCES "services"("id") ON DELETE CASCADE ON UPDATE CASCADE;
