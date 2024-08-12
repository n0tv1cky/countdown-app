import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import dayjs from "dayjs";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";

export default function CustomDateTimePicker({ dateAndTime, setDateAndTime }) {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSetDateTime = (newDateTime) => {
    console.log("newDateTime: ", newDateTime);
    setDateAndTime(newDateTime);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          maxHeight: "10%",
        }}
      >
        <Typography variant="h6">Target Date & Time</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDateTimePicker
            orientation={isSmallScreen ? "portrait" : "landscape"}
            onAccept={handleSetDateTime}
            defaultValue={dayjs(dateAndTime)}
            slotProps={{ textField: { size: "small" } }}
          />
        </LocalizationProvider>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          width: "100%",
        }}
      >
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            sx={{ width: "100%" }}
          >
            Date and time set to {dayjs(dateAndTime).format("YYYY-MM-DD HH:mm")}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}
