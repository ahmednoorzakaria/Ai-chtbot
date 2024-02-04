import jwt from "jsonwebtoken";
export const createToken = (id, email, expiresIn) => {
    const payload = { id, email }; // Use an object to represent the payload
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
    return token;
};
//# sourceMappingURL=token-manageger.js.map