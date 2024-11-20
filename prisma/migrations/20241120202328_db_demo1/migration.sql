/*
  Warnings:

  - Added the required column `ownerId` to the `Employes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Employes" ADD COLUMN     "ownerId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Employes" ADD CONSTRAINT "Employes_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
