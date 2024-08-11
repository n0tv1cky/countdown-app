import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function CustomDateTimePicker() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <Typography variant="h6">Target Date & Time</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDateTimePicker
            orientation="landscape"
            components={{
              Toolbar: (props) => (
                <PickersToolbar {...props} title="Custom Toolbar" />
              ),
              Day: (props) => <PickersDay {...props} disableMargin />,
            }}
          />
        </LocalizationProvider>
      </Box>
    </>
  );
}
