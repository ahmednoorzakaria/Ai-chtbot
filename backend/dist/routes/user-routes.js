import { Router } from "express";
import { getAllUsers } from "../controllers/user-controllers.js";
const userRoutes = Router();
userRoutes.get("/login", getAllUsers);
export default userRoutes;
//# sourceMappingURL=user-routes.js.map