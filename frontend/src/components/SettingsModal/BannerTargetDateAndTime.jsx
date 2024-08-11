import React from "react";
import CustomDateTimePicker from "../CustomDateTimePicker";
import { Box, Typography } from "@mui/material";

export const BannerTargetDateAndTime = ({ setDateAndTime }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CustomDateTimePicker setDateAndTime={setDateAndTime} />
    </Box>
  );
};
