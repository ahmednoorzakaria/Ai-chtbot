import { Router } from "express";
import { verifyToken } from "../utils/token-manageger.js";
import { chatCompletionValidator } from "../utils/validator.js";
import { generateChatCompletion } from "../controllers/chat-controllers.js";

//protected API
const chatRoutes = Router();
chatRoutes.post(
  "/new",
  chatCompletionValidator,
  verifyToken,
  generateChatCompletion
);

export default chatRoutes;
