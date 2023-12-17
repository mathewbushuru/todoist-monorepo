import { Router } from "express";

import {
  postSignupController,
  postLoginController,
} from "../controllers/auth.js";

const router = Router();

router.post("/signup", postSignupController);
router.post("/login", postLoginController);

export default router;
