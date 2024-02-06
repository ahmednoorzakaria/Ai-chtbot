import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import React, { useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { red } from "@mui/material/colors";
import { ChatItem } from "../components/chat/chat-item";
import { IoMdSend } from "react-icons/io";
import { sendChatRequest } from "../helpers/api-communicator";
type Message = {
  role: "user" | "assistant";
  content: string;
};
const Chat = () => {
  const auth = useAuth();
  const [chatMessages, setChatMessages] = React.useState<Message[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleSubmit = async () => {
    console.log(inputRef.current?.value);
    const content = inputRef.current?.value as string;
    if (inputRef && inputRef.current) {
      inputRef.current.value = "";
    }
    const newMessage: Message = { role: "user", content };
    setChatMessages((prev) => [...prev, newMessage]);
    const chatData = await sendChatRequest(content);
    setChatMessages([...chatData.chats]);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        mt: 3,
        gap: 3,
      }}
    >
      <Box
        sx={{
          display: { md: "flex", xs: "none", sm: "none" },
          flex: 0.2,
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "60vh",
            bgcolor: "rgb(17,29,39)",
            borderRadius: 5,
            flexDirection: "column",
            mx: 3,
          }}
        >
          <Avatar
            sx={{
              ma: "auto",
              my: 2,
              bgcolor: "white",
              color: "black",
              fontWeight: 700,
            }}
          >
            {auth?.user?.name[0]}
            {auth?.user?.name.split("")[1][0]}
          </Avatar>
          <Typography sx={{ mx: "auto", fontFamily: "work sans" }}>
            You are talking to a chat bot
          </Typography>
          <Typography sx={{ mx: "auto", fontFamily: "work sans", my: 4, p: 3 }}>
            You can ask some questions related to Knowledge, Business, Advices,
            Education, etc. But AVOID sharing personal and sensitive information
          </Typography>
          <Button
            sx={{
              width: "200px",
              my: "auto",
              color: "white",
              fontWeight: "700",
              borderRadius: 3,
              mx: "auto",
              bgcolor: red[300],
              ":hover": {
                bgcolor: red.A400,
              },
            }}
          >
            Clear Conversation
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flex: { md: 0.8, xs: 1, sm: 1 },
          flexDirection: "column",
          px: 3,
        }}
      >
        <Typography
          sx={{
            mx: "auto",
            fontSize: "40px",
            color: "white",
            mb: 2,
            fontWeight: "600",
          }}
        >
          Model - GPT 3.5 Turbo
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "60vh",
            borderRadius: 3,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            overflow: "scroll",
            overflowX: "hidden",
            scrollBehavior: "smooth",
            overflowY: "auto",
          }}
        >
          {chatMessages.map((chat, index) => (
            //@ts-ignore
            <ChatItem content={chat.content} role={chat.role} key={index} />
          ))}
        </Box>
      </Box>
      <div
        style={{
          width: "100%",
          borderRadius: 8,
          backgroundColor: "rgb(17,27,39)",
          display: "flex",
          margin: "auto",
        }}
      >
        <input
          ref={inputRef}
          type="text"
          style={{
            width: "100%",
            backgroundColor: "transparent",
            padding: "30px",
            border: "none",
            outline: "none",
            color: "white",
            fontSize: "20px",
          }}
        ></input>
        <IconButton
          sx={{ marginLeft: "auto", color: "white" }}
          onClick={handleSubmit}
        >
          <IoMdSend />
        </IconButton>
      </div>
    </Box>
  );
};

export default Chat;
