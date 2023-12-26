import mongoose, { Schema } from "mongoose";
import { randomUUID } from "crypto";
import { scheduler } from "timers/promises";

const chatSchema = new mongoose.Schema({
  id: { type: String, default: randomUUID() },
  role: { type: String, required: true },
  content: { type: String, required: true },
});
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  chats: [chatSchema],
});

export default mongoose.model("user", userSchema);
