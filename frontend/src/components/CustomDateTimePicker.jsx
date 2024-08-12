import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import dayjs from "dayjs";

export default function CustomDateTimePicker({ dateAndTime, setDateAndTime }) {
  const handleSetDateTime = (newDateTime) => {
    console.log("newDateTime: ", newDateTime);
    setDateAndTime(newDateTime);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <Typography variant="h5">Target Date & Time</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDateTimePicker
            orientation="landscape"
            onAccept={handleSetDateTime}
            defaultValue={dayjs(dateAndTime)}
          />
        </LocalizationProvider>
      </Box>
    </>
  );
}
