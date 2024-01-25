import React from "react";
import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/ToolBar";
const Header = () => {
  return (
    <AppBar
      sx={{ bgcolor: "transparent", position: "static", boxshadow: "none" }}
    >
      <ToolBar sx={{ display: "flex" }}></ToolBar>
    </AppBar>
  );
};

export default Header;
