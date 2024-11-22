import express from "express";
import employeeRoutes from "./routes/Employees/route";

export const app = express();

app.use(express.json());

app.use("/employees", employeeRoutes);
