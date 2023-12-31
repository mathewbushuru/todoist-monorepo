// Third party imports
import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";

// Routes imports
import authRoutes from "./routes/auth.js";
import testRoutes from "./routes/test.js";

// Extend express request type
declare global {
  namespace Express {
    interface Request {
      userId?: number;
    }
  }
}

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "Welcome to Todoist Server API" });
});

app.use("/auth", authRoutes);
app.use("/test", testRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
  const errorMessage = "404 Error - Not Found!";
  console.error(errorMessage);
  return res.status(404).json({ errorMessage });
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.error(error);

  return res.status(500).json({
    errorMessage: error.message || "Something went wrong...",
    ...error,
  });
});

export default app;
