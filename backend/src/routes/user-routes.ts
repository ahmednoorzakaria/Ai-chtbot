import { Router } from "express";
import appRouter from "./index.js";
import { getAllUsers } from "../controllers/user-controllers.js";

const userRoutes = Router();

userRoutes.get("/login", getAllUsers);


export default userRoutes;