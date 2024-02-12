import { Router } from "express";
import chatRoutes from "./chat-routes.js";
import userRoutes from "./user-routes.js";


const appRouter = Router();


appRouter.use("/chat", chatRoutes);
appRouter.use("/user", userRoutes);


export default appRouter;
