import React from "react";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import { Box, Stack } from "@mui/material";
import Navbar from "./components/Navbar";
import "./App.css"

function App() {
  return (
    <Box>
      <Navbar/>
      <Stack direction= "row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
}

export default App;
