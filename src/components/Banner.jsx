import { Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";
export const Banner = () => {
  const [calculatedTime, setCalculatedTime] = useState("No Time Set");
  return (
    <>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}>
        <Typography variant="h2" fontWeight="bold">
          Exciting Announcement in
        </Typography>
        <Typography variant="h1" fontFamily="monospace">{calculatedTime}</Typography>
      </Box>
    </>
  );
};
