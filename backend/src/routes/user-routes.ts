import { Router } from "express";
import appRouter from "./index.js";
import { getAllUsers, userSignup } from "../controllers/user-controllers.js";

const userRoutes = Router();

userRoutes.get("/login", getAllUsers);
userRoutes.post("/signup",userSignup);

export default userRoutes;