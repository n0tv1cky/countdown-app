import React from "react";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

export const BannerDescription = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
      }}
    >
      <Typography variant="h5">Banner Description</Typography>
      <TextField
        id="outlined-multiline-flexible"
        multiline
        rows={4}
        sx={{
          width: "100%",
        }}
      />
    </Box>
  );
};
