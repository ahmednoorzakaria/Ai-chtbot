import { Box, Avatar, Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContext";

function extractCodeFromString(message: string) {
  if (message.includes("```")) {
    const blocks = message.split("```");
    return blocks;
  }
}

function isCodeBlock(str: string) {
  if (
    str.includes("=") ||
    str.includes(";") ||
    str.includes("[") ||
    str.includes("]") ||
    str.includes("{") ||
    str.includes("}") ||
    str.includes("#") ||
    str.includes("//")
  ) {
    return true;
  }
  return false;
}
const ChatItem = ({
  question,
  content,
}: {
  question: string;
  content: string | string[];
}) => {
  const messageBlocks = extractCodeFromString(
    Array.isArray(content) ? content.join(" ") : content
  );
  const auth = useAuth();
  console.log("content from chat-ITEM", content.join(""));

  return (
    <>
      {/* User Question */}
      <Box
        sx={{
          display: "flex",
          p: 2,
          bgcolor: "#004d56",
          gap: 2,
          borderRadius: 2,
        }}
      >
        <Avatar sx={{ ml: "0" }}>
          {auth?.user?.name ? auth.user.name.slice(0, 2) : "US"}
        </Avatar>
        <Box>
          <Typography sx={{ fontSize: "20px" }}>{question}</Typography>
        </Box>
      </Box>

      {/* Assistant Content */}
      <Box
        sx={{
          display: "flex",
          p: 2,
          bgcolor: "#004d5612",
          gap: 2,
          borderRadius: 2,
          my: 1,
        }}
      >
        <Avatar sx={{ ml: "0" }}>
          <img src="openai.png" alt="openai" width={"30px"} />
        </Avatar>
        <Box>
          <Typography sx={{ fontSize: "20px" }}>
            {Array.isArray(content) ? content.join("") : content}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default ChatItem;
