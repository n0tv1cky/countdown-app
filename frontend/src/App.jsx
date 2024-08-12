import { useEffect, useState } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import { Banner } from "./components/Banner";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { readData } from "./actions/readData";

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
  const [bannerData, setBannerData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const data = await readData();
      setBannerData(data);
      setLoading(false);
    } catch (error) {
      setErrorMessage(
        "Please wait while the server container is being spun up, usually takes ~ 50s"
      );
      setLoading(false);
    }
  };

  const updateBannerData = (data) => {
    console.log("updateBannerData");
    setBannerData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box>
        <Navbar updateBannerData={updateBannerData} />
        {loading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
          >
            <CircularProgress />
            <Typography variant="h6" sx={{ marginLeft: "1rem" }}>
              Loading...
            </Typography>
          </Box>
        ) : errorMessage ? (
          <Typography variant="h4" align="center" sx={{ marginTop: "2rem" }}>
            {errorMessage}
          </Typography>
        ) : bannerData?.visible ? (
          <Banner bannerData={bannerData} />
        ) : (
          <Typography variant="h4" align="center" sx={{ marginTop: "2rem" }}>
            Please choose a date and time to show the timer
          </Typography>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
