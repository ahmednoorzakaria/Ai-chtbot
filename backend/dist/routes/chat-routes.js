import { Router } from "express";
import { verifyToken } from "../utils/token-manageger.js";
import { generateChatCompletion, sendChatsToUser, deleteChats } from "../controllers/chat-controllers.js";
//protected API
const chatRoutes = Router();
chatRoutes.post("/new", verifyToken, generateChatCompletion);
chatRoutes.get("/all-chats", verifyToken, sendChatsToUser);
chatRoutes.delete("/delete", verifyToken, deleteChats);
export default chatRoutes;
//# sourceMappingURL=chat-routes.js.map