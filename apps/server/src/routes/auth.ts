import { Router } from "express";

import { postSignupController } from "../controllers/auth.js";

const router = Router();

router.post("/signup", postSignupController);

export default router;
