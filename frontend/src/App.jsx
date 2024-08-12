import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import { Banner } from "./components/Banner";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { readData } from "./actions/readData";
import { updateData } from "./actions/updateData";
import { clearDate, clearDescription, clearLink } from "./actions/deleteData";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [bannerData, setBannerData] = useState("No target time set");
  useEffect(() => {
    const fetchData = async () => {
      const data = await readData();
      setBannerData(data);
    };

    fetchData();

    // updateData({
    //   description: "New description",
    //   targetTime: "2023-12-31T23:59:59Z",
    //   link: "https://example.com",
    //   visible: true,
    // });
    // clearDescription();
    // clearDate();
    // clearLink();
  }, []);

  // useEffect(() => {
  //   console.log("bannerData", bannerData);
  // }, [bannerData]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box>
        <Navbar />
        <Banner bannerData={bannerData} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
