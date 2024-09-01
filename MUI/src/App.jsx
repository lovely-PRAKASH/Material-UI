import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import { Box, createTheme, Stack } from "@mui/material";
import Navbar from "./components/Navbar";
import { ThemeProvider, CssBaseline } from "@mui/material";
import "./App.css";
import Add from "./components/Add";

function App() {
  const [mode, setMode] = useState("light");

  const darkMode = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkMode}>
      <CssBaseline />
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
