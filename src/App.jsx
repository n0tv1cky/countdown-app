import { useState } from "react";
import { Box, Typography } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import { Banner } from "./components/Banner";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [countdownTime, setCountdownTime] = useState("");

  const fetchTime = () => {};

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box>
        <Navbar />
        <Banner />
      </Box>
    </ThemeProvider>
  );
}

export default App;
