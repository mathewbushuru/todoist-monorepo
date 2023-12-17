import { createUser } from "../database/utils.js";
import { hashPassword } from "../lib/auth.js";
/**
 * @desc:       Sign up user
 * @listens:    POST /auth/signup
 * @access:     public
 */
export const postSignupController = async (req, res, next) => {
    const signupReqData = req.body;
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
    createUser(signupReqData.email, hashedReqDataPassword, signupReqData.fullName, signupReqData.usageMode, signupReqData.teamAccount)
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
