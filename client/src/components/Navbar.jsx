import React, { useState } from "react";
import { 
    LightModeOutlined, 
    DarkModeOutlined, 
    Menu as MenuIcon, 
    Search, 
    ArrowDropDownOutlined,
 } from "@mui/icons-material";
import FlexBetween from "components/FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "state";
import profileImage from "assets/p7.jpeg";
import { IconButton } from "@mui/material";


const Navbar = () => {
    const dispatch = useDispatch();
    const theme = useTheme();

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
    <Toolbar sx={{ justifyContent: "space-between"}}>
      {/* LEFT SIDE */}
      <FlexBetween>

      </FlexBetween>
    </Toolbar>
  </AppBar>
  );
};

export default Navbar;