/**
 * Routes specifically for testing
 */

import { Router } from "express";

import { verifyToken } from "../middleware/auth-jwt.js";

const router = Router();

router.get("/test-error", (req, res, next) => {
  const error = new Error("Test Error");
  next(error);
});

router.get("/test-protected-route", verifyToken, (req, res, next) => {
  console.log("Inside protected route");
  return res.json({ message: "Protected route", decodedUserId: req.userId });
});

export default router;
