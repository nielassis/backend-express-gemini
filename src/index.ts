import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { ping } from "./routes/ping";

export const app = express();
const PORT = process.env.PORT || 3001;
const prisma = new PrismaClient();

ping(app);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
