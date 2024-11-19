import { Request, Response } from "express";
import { app } from "..";

export const ping = (app: any) => {
  app.get("/", (req: Request, res: Response) => {
    res.status(200).send("pong");
  });
};
