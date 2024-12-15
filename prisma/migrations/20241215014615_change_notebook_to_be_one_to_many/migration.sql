/*
  Warnings:

  - You are about to drop the `_NotebookToPage` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `notebookId` to the `Page` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "_NotebookToPage_B_index";

-- DropIndex
DROP INDEX "_NotebookToPage_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_NotebookToPage";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Page" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "lessonId" INTEGER NOT NULL,
    "notebookId" INTEGER NOT NULL,
    CONSTRAINT "Page_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Page_notebookId_fkey" FOREIGN KEY ("notebookId") REFERENCES "Notebook" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Page" ("id", "lessonId", "text") SELECT "id", "lessonId", "text" FROM "Page";
DROP TABLE "Page";
ALTER TABLE "new_Page" RENAME TO "Page";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
