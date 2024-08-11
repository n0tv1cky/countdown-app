import React from "react";
import { Box, Typography } from "@mui/material";
import BasicSwitch from "../BasicSwitch";

export const ToggleBannerDisplay = ({
  visibleSwitchOn,
  setVisibleSwitchOn,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Typography
        // id="transition-modal-title"
        variant="h5"
        component="h2"
      >
        Toggle Banner Display
      </Typography>
      <BasicSwitch
        visibleSwitchOn={visibleSwitchOn}
        setVisibleSwitchOn={setVisibleSwitchOn}
      />
    </Box>
  );
};
