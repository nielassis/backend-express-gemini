import { Router } from "express";
import { createEmployee } from "../../controllers/Employees/Employee.controller";

const router = Router();

router.post("/create", createEmployee);

export default router;
