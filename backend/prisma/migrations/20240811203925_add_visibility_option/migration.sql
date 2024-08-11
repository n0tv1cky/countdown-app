/*
  Warnings:

  - Added the required column `visible` to the `Banner` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Banner` ADD COLUMN `visible` BOOLEAN NOT NULL,
    MODIFY `link` VARCHAR(191) NOT NULL;
