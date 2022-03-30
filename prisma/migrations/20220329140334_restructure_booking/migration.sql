/*
  Warnings:

  - You are about to drop the column `endAt` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `startAt` on the `Booking` table. All the data in the column will be lost.
  - Added the required column `currency` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Booking` DROP COLUMN `endAt`,
    DROP COLUMN `startAt`,
    ADD COLUMN `currency` VARCHAR(191) NOT NULL;
