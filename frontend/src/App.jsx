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
    background: {
      default:
        "linear-gradient(90deg, rgba(22,0,0,1) 0%, rgba(40,40,40,1) 100%)",
    },
  },
});

function App() {
  const [bannerData, setBannerData] = useState("No target time set");

  const fetchData = async () => {
    const data = await readData();
    setBannerData(data);
  };

  const updateBannerData = (data) => {
    console.log("updateBannerData");
    setBannerData(data);
  };

  useEffect(() => {
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

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box>
        <Navbar updateBannerData={updateBannerData} />
        {bannerData.visible ? (
          <Banner bannerData={bannerData} />
        ) : (
          <Typography variant="h3">
            Please choose a date and time to show timer
          </Typography>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
