/*
  Warnings:

  - Added the required column `availability` to the `addressHouse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `availability` to the `houses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "addressHouse" ADD COLUMN     "availability" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "houses" ADD COLUMN     "availability" BOOLEAN NOT NULL;
