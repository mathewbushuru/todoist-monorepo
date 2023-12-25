import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { createUser, getUserByEmail } from "../database/utils.js";
import { hashPassword, checkUserPassword } from "../lib/auth.js";

export interface SignupRequestType {
  email: string;
  password: string;
  fullName: string;
  teamAccount: "yes" | "no";
  usageMode: "personal" | "work" | "education";
}

interface LoginRequestType {
  email: string;
  password: string;
}

interface LoginSuccessResponseType {
  message: string;
  jwtToken: string;
  id: number;
  email: string;
  fullName: string;
  teamAccount: "yes" | "no";
  usageMode: "personal" | "work" | "education";
  createdAt: string;
  updatedAt: string;
}

/**
 * @desc:       Sign up user
 * @listens:    POST /auth/signup
 * @access:     public
 * @param:      req, res, next
 */
export const postSignupController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const signupReqData = req.body as SignupRequestType;

  // simple missing data validation
  if (!signupReqData.email) {
    const errorMessage = "Sign up error. Email is missing";
    console.error(errorMessage);
    return res.status(400).json({ errorMessage });
  }
  if (!signupReqData.password) {
    const errorMessage = "Sign up error. Password is missing";
    console.error(errorMessage);
    return res.status(400).json({ errorMessage });
  }
  if (!signupReqData.fullName) {
    const errorMessage = "Sign up error. Name is missing";
    console.error(errorMessage);
    return res.status(400).json({ errorMessage });
  }

  const hashedReqDataPassword = await hashPassword(signupReqData.password);

  createUser(
    signupReqData.email,
    hashedReqDataPassword,
    signupReqData.fullName,
    signupReqData.usageMode,
    signupReqData.teamAccount
  )
    .then((createUserResponse) => {
      if (createUserResponse === null) {
        const errorMessage = "There was an error signing up, try again";
        return res.status(500).json({ errorMessage });
      }
      console.log("Sign up successful");
      const { hashedPassword, ...userDataWithoutPassword } = createUserResponse;
      return res
        .status(201)
        .json({ message: "Sign up successful", ...userDataWithoutPassword });
    })
    .catch((err) => {
      return next(err);
    });
};

/**
 * @desc:       Log in user
 * @listens:    POST /auth/login
 * @access:     public
 * @param:      req, res, next
 */
export const postLoginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const loginReqData = req.body as LoginRequestType;

  if (!loginReqData.email) {
    const errorMessage = "Log in error, email is missing";
    console.error(errorMessage);
    return res.status(400).json({ errorMessage });
  }

  if (!loginReqData.password) {
    const errorMessage = "Log in error, password is missing";
    console.error(errorMessage);
    return res.status(400).json({ errorMessage });
  }

  const userData = await getUserByEmail(loginReqData.email);

  if (!userData) {
    const errorMessage = "Log in error, no such user";
    return res.status(401).json({ errorMessage });
  }

  const { hashedPassword, ...userDataWithoutPassword } = userData;

  const passwordMatches = await checkUserPassword(
    loginReqData.password,
    hashedPassword
  );

  if (!passwordMatches) {
    const errorMessage = "Log in error, wrong password";
    return res.status(401).json({ errorMessage });
  }

  console.log("Log in successful");

  const secondsToExpire = 24 * 60 * 60;
  const jwtToken = jwt.sign(
    { userId: userDataWithoutPassword.id },
    process.env.JWT_SECRET_KEY!,
    { algorithm: "HS256", expiresIn: secondsToExpire }
  );

  const successfulLoginResponse: LoginSuccessResponseType = {
    ...userDataWithoutPassword,
    message: "Log in successful",
    jwtToken,
    teamAccount: userDataWithoutPassword.teamAccount === 1 ? "yes" : "no",
    usageMode:
      userDataWithoutPassword.usageMode === 2
        ? "education"
        : userDataWithoutPassword.usageMode === 1
          ? "work"
          : "personal",
  };

  return res.json(successfulLoginResponse);
};
