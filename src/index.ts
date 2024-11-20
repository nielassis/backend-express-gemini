import express from "express";
import { PrismaClient } from "@prisma/client";
import { createEmployee } from "./routes/createEmployee";
export const app = express();
export const prisma = new PrismaClient();
app.use(express.json());

app.post("/employees", createEmployee);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
