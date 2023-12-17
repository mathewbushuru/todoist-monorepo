/**
 * Routes specifically for testing
 */

import { Router } from "express";

const router = Router();

router.get("/test-error", (req, res, next) => {
  const error = new Error("Test Error");
  next(error);
});

export default router;
