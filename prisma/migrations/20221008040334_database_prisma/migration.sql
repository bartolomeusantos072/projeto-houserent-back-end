/*
  Warnings:

  - You are about to drop the column `observation` on the `users` table. All the data in the column will be lost.
  - Added the required column `observation` to the `houses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "houses" ADD COLUMN     "observation" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "observation";
