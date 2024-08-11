import React from "react";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

export const BannerDescription = ({ setDescription }) => {
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
        placeholder="Enter Description here"
        multiline
        rows={4}
        sx={{
          width: "100%",
        }}
        onChange={(e) => setDescription(e.target.value)}
      />
    </Box>
  );
};
