import mongoose from "mongoose";
import { randomUUID } from "crypto";
const chatSchema = new mongoose.Schema({
    id: { type: String, default: randomUUID() },
    content: { type: [String], required: true }, // Modify content to be an array of strings
    question: { type: String, required: true },
});
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    chats: [chatSchema],
});
export default mongoose.model("User", userSchema);
//# sourceMappingURL=user.js.map