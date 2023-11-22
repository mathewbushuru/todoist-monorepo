// Third party imports
import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "Welcome to Todoist Server API" });
});
app.use((req: Request, res: Response, next: NextFunction) => {
  const errorMessage = "404 Error - Not Found!";
  console.log(errorMessage);
  return res.status(404).json({ errorMessage });
});
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  return res
    .status(500)
    .json({ errorMessage: "Something went wrong...", ...error });
});

export default app;
