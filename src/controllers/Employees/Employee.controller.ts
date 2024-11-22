import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { nanoid } from "nanoid";
import {
  findWorkspace,
  createEmployeeRecord,
} from "../../models/Employees/Employees.model";

export const createEmployee = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { ownerId, workspaceId } = req.body;

  if (!ownerId || !workspaceId) {
    res
      .status(400)
      .json({ message: "Missing required fields: ownerId or workspaceId" });
    return;
  }

  try {
    const workspaceExists = await findWorkspace(ownerId, workspaceId);

    if (!workspaceExists) {
      res.status(404).json({
        message: "Workspace not found or does not belong to the owner",
      });
      return;
    }

    const randomLogin = `user_${nanoid(5)}`;
    const randomPassword = nanoid(10);
    const hashedPassword = await bcrypt.hash(randomPassword, 10);

    const employee = await createEmployeeRecord({
      ownerId,
      workspaceId,
      username: randomLogin,
      login: randomLogin,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "Employee created successfully",
      employee: {
        id: employee.id,
        login: randomLogin,
        password: randomPassword,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating employee" });
  }
};
