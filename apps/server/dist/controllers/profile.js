import { getUserById } from "../database/utils.js";
/**
 * @desc: Send back user's data after the JWT token in the request header is validated by verifyToken middleware
 * @listens: GET /auth/verify-token
 * @access: private
 */
export const getVerifiedUserDataController = async (req, res, next) => {
    const userId = req.userId;
    if (!userId) {
        return res
            .status(401)
            .json({ errorMessage: "Unauthorized - invalid token" });
    }
    const userData = await getUserById(userId);
    if (userData === null) {
        const errorMessage = "There was an error fetching user data. Try  again";
        return res.status(500).json({ errorMessage });
    }
    console.log(userData);
    const { hashedPassword, ...userDataWithoutPassword } = userData;
    const userDataResponse = {
        ...userDataWithoutPassword,
        teamAccount: userDataWithoutPassword.teamAccount === 1 ? "yes" : "no",
        usageMode: userDataWithoutPassword.usageMode === 2
            ? "education"
            : userDataWithoutPassword.usageMode === 1
                ? "work"
                : "personal",
    };
    return res.json(userDataResponse);
};
