import dbPool from "./index.js";

import { type SignupRequestType } from "../controllers/auth.js";

interface dbUserType {
  id: number;
  email: string;
  hashedPassword: string;
  fullName: string;
  usageMode: 0 | 1 | 2;
  teamAccount: 0 | 1;
  createdAt: string;
  updatedAt: string;
}

export async function createUser(
  email: SignupRequestType["email"],
  hashedPassword: SignupRequestType["password"],
  fullName: SignupRequestType["fullName"],
  usageMode: SignupRequestType["usageMode"],
  teamAccount: SignupRequestType["teamAccount"]
) {
  try {
    const response: any = await dbPool.query(
      `INSERT INTO todoist_users (
            email, hashedPassword, fullName, usageMode, teamAccount
       ) VALUES (?, ?, ?, ?, ?)`,
      [
        email,
        hashedPassword,
        fullName,
        usageMode === "education" ? 2 : usageMode === "work" ? 1 : 0,
        teamAccount === "yes" ? 1 : 0,
      ]
    );
    const id = response[0].insertId;
    return getUserById(id)!;
  } catch (error: any) {
    let customErrorMessage: undefined | string;

    if (
      error.message &&
      (error.code === "ER_DUP_ENTRY" ||
        error.message.startsWith("Duplicate entry"))
    ) {
      customErrorMessage =
        "Oh no, this email address is unavailable! Please try a different address.";
    }

    throw new Error(customErrorMessage || "Sign up error, try again");
  }
}

export async function getUserById(id: number) {
  try {
    const dbResponse = await dbPool.query(
      `
                SELECT * from todoist_users WHERE id=?;
            `,
      [id]
    );
    const usersArr = dbResponse[0] as unknown as dbUserType[];
    let user: dbUserType | null;
    if (usersArr.length > 0) {
      user = usersArr[0];
    } else {
      user = null;
    }
    return user;
  } catch (error: any) {
    throw new Error(error.message || "Error getting user");
  }
}

export async function getUserByEmail(email: string) {
  try {
    const dbResponse = await dbPool.query(
      `
                SELECT * FROM todoist_users WHERE email=?
            `,
      [email]
    );

    const usersArr = dbResponse[0] as unknown as dbUserType[];
    let user: dbUserType | null;
    if (usersArr.length > 0) {
      user = usersArr[0];
    } else {
      user = null;
    }

    return user;
  } catch (error: any) {
    throw new Error(error.message || "Error getting user with email.");
  }
}
