-- DropForeignKey
ALTER TABLE "cars" DROP CONSTRAINT "cars_userId_fkey";

-- AlterTable
ALTER TABLE "cars" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "cars" ADD CONSTRAINT "cars_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
