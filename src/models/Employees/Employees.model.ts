import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findWorkspace = async (ownerId: string, workspaceId: string) => {
  return prisma.workspaces.findFirst({
    where: {
      id: workspaceId,
      ownerId,
    },
  });
};

export const createEmployeeRecord = async (data: {
  ownerId: string;
  workspaceId: string;
  login: string;
  password: string;
  username: string;
}) => {
  return prisma.employes.create({
    data,
  });
};
