import dbPool from "./index.js";
export async function createUser(email, hashedPassword, fullName, usageMode, teamAccount) {
    try {
        const response = await dbPool.query(`INSERT INTO todoist_users (
            email, hashedPassword, fullName, usageMode, teamAccount
       ) VALUES (?, ?, ?, ?, ?)`, [
            email,
            hashedPassword,
            fullName,
            usageMode === "education" ? 2 : usageMode === "work" ? 1 : 0,
            teamAccount === "yes" ? 1 : 0,
        ]);
        const id = response[0].insertId;
        return getUserById(id);
    }
    catch (error) {
        let customErrorMessage;
        console.log(error);
        if (error.message && error.message.startsWith("Duplicate entry")) {
            customErrorMessage =
                "Oh no, this email address is unavailable! Please try a different address.";
        }
        throw new Error(customErrorMessage || "Sign up error, try again");
    }
}
export async function getUserById(id) {
    try {
        const dbResponse = await dbPool.query(`
                SELECT * from todoist_users WHERE id=?;
            `, [id]);
        const usersArr = dbResponse[0];
        let user;
        if (usersArr.length > 0) {
            user = usersArr[0];
        }
        else {
            user = null;
        }
        return user;
    }
    catch (error) {
        throw new Error(error.message || "Error getting user");
    }
}
export async function getUserByEmail(email) {
    try {
        const dbResponse = await dbPool.query(`
                SELECT * FROM todoist_users WHERE email=?
            `, [email]);
        const usersArr = dbResponse[0];
        let user;
        if (usersArr.length > 0) {
            user = usersArr[0];
        }
        else {
            user = null;
        }
        return user;
    }
    catch (error) {
        throw new Error(error.message || "Error getting user with email.");
    }
}
