import { Request, Response } from "express";

export const handleContact = (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  console.log("New Contact Request:");
  console.log(name, email, message);

  res.json({
    success: true,
    message: "Message received successfully!"
  });
};