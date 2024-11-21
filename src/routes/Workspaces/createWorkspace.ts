import { Request, Response } from "express";
import { prisma } from "../..";

export const createWorkspace = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { ownerId, name } = req.body;

  if (!ownerId || !name) {
    res.status(400).json({
      error: "Invalid input",
      details: "Both 'ownerId' and 'name' fields are required",
    });
    return;
  }

  try {
    const workspace = await prisma.workspaces.create({
      data: {
        ownerId,
        name,
      },
    });

    res.status(201).json({
      success: true,
      message: "Workspace created successfully",
      data: workspace,
    });
  } catch (error) {
    console.error("Error creating workspace:", error);

    res.status(500).json({
      error: "Server error",
      details: "An unexpected error occurred while creating the workspace",
    });
  }
};
