import express, { Request, Response, NextFunction } from "express";

const app = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "Welcome to Todoist Server API" });
});

export default app;