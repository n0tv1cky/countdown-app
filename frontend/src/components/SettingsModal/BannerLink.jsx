import React from "react";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

export const BannerLink = ({ link, setLink }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
      }}
    >
      <Typography variant="h6">Banner Link</Typography>
      <TextField
        id="outlined-multiline-flexible"
        placeholder="Enter Link here"
        rows={1}
        sx={{
          width: "100%",
        }}
        onChange={(e) => setLink(e.target.value)}
        defaultValue={link}
      />
    </Box>
  );
};
