import { AppBar, Box, styled, Toolbar } from "@mui/material";
import React from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifycontent: "space-between",
});

function Navbar() {
  return (
    <Box>
      <AppBar position="sticky">
        <StyledToolbar>Navbar</StyledToolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
