import sql from "./index.js";

import type { UserType, SignupRequestType } from "../../types/user-types.js";

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

    const createdUser: UserType = {
      id: userRows[0].id,
      email: userRows[0].email,
      hashedPassword: userRows[0].hashed_password,
      fullName: userRows[0].full_name,
      usageMode: userRows[0].usage_mode,
      teamAccount: userRows[0].team_account,
      createdAt: userRows[0].created_at,
      updatedAt: userRows[0].updated_at,
    };

    return createdUser;
  } catch (error: any) {
    let customErrorMessage: undefined | string;

    if (
      error.message ===
      'duplicate key value violates unique constraint "todoist_users_email_key"'
    ) {
      customErrorMessage =
        "Oh no, this email address is unavailable! Please try a different address.";
    }

    throw new Error(customErrorMessage || "Sign up error, try again.");
  }
}

export async function getUserByEmail(email: string) {
  try {
    const userRows = await sql`
                            SELECT * FROM todoist_users WHERE email = ${email};
                          `;

    let user: UserType | null;

    if (!userRows || userRows.length === 0) {
      user = null;
    }

    user = {
      id: userRows[0].id,
      email: userRows[0].email,
      hashedPassword: userRows[0].hashed_password,
      fullName: userRows[0].full_name,
      usageMode: userRows[0].usage_mode,
      teamAccount: userRows[0].team_account,
      createdAt: userRows[0].created_at,
      updatedAt: userRows[0].updated_at,
    };

    return user;
  } catch (error: any) {
    throw new Error(error.message || "Error getting user with email");
  }
}
