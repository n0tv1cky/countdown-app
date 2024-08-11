import { useEffect, useState } from "react";
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
  const serverUrl = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    fetchTime();
  }, []);

  const fetchTime = async () => {
    try {
      const response = await fetch(`${serverUrl}/api/data`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      console.log("fetched data: ", json);
      setCountdownTime(json.targetTime);
    } catch (err) {
      console.error(`Failed to fetch data from ${serverUrl}/api/data: `, err);
    }
  };

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
