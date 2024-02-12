import { Router } from "express";
import { getAllUsers, userLogin, userLogout, userSignup, verifyUser, } from "../controllers/user-controllers.js";
import { validate, signupValidator, loginValidator } from "../utils/validator.js";
import { verifyToken } from "../utils/token-manageger.js";
const userRoutes = Router();
userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signupValidator), userSignup);
userRoutes.post("/login", validate(loginValidator), userLogin);
userRoutes.get("/auth-status", verifyToken, verifyUser);
userRoutes.get("/logout", verifyToken, userLogout);
export default userRoutes;
//# sourceMappingURL=user-routes.js.map