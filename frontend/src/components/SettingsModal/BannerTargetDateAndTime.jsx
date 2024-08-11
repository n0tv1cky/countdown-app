import React from "react";
import CustomDateTimePicker from "../CustomDateTimePicker";
import { Box, Typography } from "@mui/material";

export const BannerTargetDateAndTime = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CustomDateTimePicker label={"Choose Target Date & Time"} />
    </Box>
  );
};
