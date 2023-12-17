import dbPool from "./index.js";

import { signupDataType } from "../controllers/auth.js";

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
  email: signupDataType["email"],
  hashedPassword: signupDataType["password"],
  fullName: signupDataType["fullName"],
  usageMode: signupDataType["usageMode"],
  teamAccount: signupDataType["teamAccount"]
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

    if (error.message && error.message.startsWith("Duplicate entry")) {
      customErrorMessage =
        "Cannot create user, email address is already registered.";
    }

    throw new Error(customErrorMessage || "Error creating user in database");
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
