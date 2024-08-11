/*
  Warnings:

  - Changed the type of `targetTime` on the `Banner` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE `Banner` DROP COLUMN `targetTime`,
    ADD COLUMN `targetTime` DATETIME(3) NOT NULL;
