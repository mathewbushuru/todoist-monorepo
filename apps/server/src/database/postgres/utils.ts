import sql from "./index.js";

import { type SignupRequestType } from "../../types/user-types.js";

interface dbUserType {
  id: number;
  email: string;
  hashedPassword: string;
  fullName: string;
  usageMode: 0 | 1 | 2;
  teamAccount: boolean;
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
    const userRows = await sql`
                            SELECT * from addUser(
                                ${email},
                                ${hashedPassword},
                                ${fullName}, 
                                ${
                                  usageMode === "education"
                                    ? "2"
                                    : usageMode === "work"
                                      ? "1 "
                                      : "0"
                                }, 
                                ${teamAccount === "yes" ? true : false}
                            );
                        `;

    if (!userRows || userRows.length === 0) {
      throw new Error(
        `An error occurred while creating ${email}. Please try again.`
      );
    }

    const createdUser = userRows[0] as dbUserType;

    return createdUser;
  } catch (error: any) {
    throw new Error(error.message || "Error getting user");
  }
}
