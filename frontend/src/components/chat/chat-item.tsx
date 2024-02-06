import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import { prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkdark } from "react-syntax-highlighter/dist/esm/styles/prism";

function extractCodeFromString(message) {
  if (message.includes("```")) {
    const blocks = message.split("```");
    return blocks;
  }
}

function isCodeBlock(str) {
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

export const ChatItem = ({
  content,
  role,
}: {
  content: string;
  role: "user" | "assistant";
}) => {
  const messageBlocks = extractCodeFromString(content);
  const auth = useAuth();

  return role === "assistant" ? (
    <Box
      sx={{
        display: "flex",
        p: 2,
        my: 2,
        gap: 2,
        bgcolor: "#004d5612",
      }}
    >
      <Avatar sx={{ ml: "0" }}>
        <img src="openai.png" width={"30px"} alt="OpenAI Avatar" />
      </Avatar>
      <Box>
        {!messageBlocks ? (
          <Typography fontSize={"20px"}>{content}</Typography>
        ) : (
          messageBlocks.map((block, index) =>
            isCodeBlock(block) ? (
              <SyntaxHighlighter
                key={index}
                style={coldarkdark}
                language="javascript"
              >
                {block}
              </SyntaxHighlighter>
            ) : (
              <Typography key={index} fontSize={"20px"}>
                {block}
              </Typography>
            ),
          )
        )}
      </Box>
    </Box>
  ) : (
    <Box
      sx={{
        display: "flex",
        p: 2,
        gap: 2,
        bgcolor: "#004d56",
      }}
    >
      <Avatar sx={{ ml: "0", bgcolor: "black", color: "white" }}>
        {auth?.user?.name[0]}, {auth?.user?.name.split("")[1][0]}
      </Avatar>
      <Box>
        {!messageBlocks ? (
          <Typography fontSize={"20px"}>{content}</Typography>
        ) : (
          messageBlocks.map((block, index) =>
            isCodeBlock(block) ? (
              <SyntaxHighlighter
                key={index}
                style={coldarkdark}
                language="javascript"
              >
                {block}
              </SyntaxHighlighter>
            ) : (
              <Typography key={index} fontSize={"20px"}>
                {block}
              </Typography>
            ),
          )
        )}
      </Box>
      B{" "}
    </Box>
  );
};
