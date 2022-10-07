/*
  Warnings:

  - You are about to drop the column `name` on the `photosDriver` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `photosDriver` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "photosDriver" DROP COLUMN "name",
ADD COLUMN     "imageUrl" TEXT NOT NULL;
