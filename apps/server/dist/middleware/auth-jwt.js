import jwt from "jsonwebtoken";
/**
 * @desc:       Verify if JWT token is valid; after middleware, request object will have userId property.
 * @access:     public
 * @param:      req, res, next
 */
export function verifyToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
        const errorMessage = "No token provided";
        return res.status(403).json({ errorMessage });
    }
    const jwtTokenReceived = authHeader.split(" ")[1];
    try {
        const decodedToken = jwt.verify(jwtTokenReceived, process.env.JWT_SECRET_KEY);
        console.log(decodedToken);
        req.userId = decodedToken.userId;
        next();
    }
    catch (error) {
        const errorMessage = "Unauthorized - Wrong JWT token";
        console.log(errorMessage);
        return res.status(401).json({ errorMessage, error });
    }
}
