import { Router } from "express";
import { createEmployee } from "../../controllers/Employee.controller";

const router = Router();

router.post("/create", createEmployee);

export default router;
