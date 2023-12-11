/**
 * Routes specifically for testing
 */
import { Router } from "express";
const router = Router();
router.get("/test-error", (req, res, next) => {
    const error = new Error("Test Error");
    console.log(error);
    next(error);
});
export default router;
