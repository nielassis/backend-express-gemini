import { Request, RequestHandler, Response } from "express";
import { nanoid } from "nanoid";
import bcrypt from "bcryptjs";
import { prisma } from "..";

export const createEmployee: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { ownerId, workspaceId, username, login, password } = req.body;
  if (!ownerId && !workspaceId) {
    return res.status(401).json({ message: "Missing required fields" });
  }
  try {
    const randomLogin = `user_${nanoid(5)}`;
    const randomPassword = nanoid(10);
    const hashedPassword = await bcrypt.hash(randomPassword, 10);

    const employee = await prisma.employes.create({
      data: {
        ownerId,
        workspaceId,
        username: randomLogin,
        login: randomLogin,
        password: hashedPassword,
      },
    });
    res.status(201).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating employee" });
  }
};
