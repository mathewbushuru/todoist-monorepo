import { Router } from "express";
import { postSignupController, postLoginController, } from "../controllers/auth.js";
import { getVerifiedUserDataController } from "../controllers/profile.js";
import { verifyToken } from "../middleware/auth-jwt.js";
const router = Router();
router.post("/signup", postSignupController);
router.post("/login", postLoginController);
router.get("/verify-token", verifyToken, getVerifiedUserDataController);
export default router;
