import jwt from "jsonwebtoken";
import { COOKIE_NAME } from "./constants.js";
export const createToken = (id, email, expiresIn) => {
    const payload = { id, email }; // Use an object to represent the payload
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
    return token;
};
export const verifyToken = async (req, res, next) => {
    const token = req.signedCookies[`${COOKIE_NAME}`];
    if (!token || token.trim() === "") {
        return res.status(401).json({ message: "Token not recieved" });
    }
    return new Promise((resolve, reject) => {
        return jwt.verify(token, process.env.JWT_SECRET, (err, success) => {
            if (err) {
                reject(err.message);
                return res.status(401).json({ message: "token expired" });
            }
            else {
                console.log("Successfully verified user");
                resolve();
                res.locals.jwtData = success;
                return next();
            }
        });
    });
};
//# sourceMappingURL=token-manageger.js.map