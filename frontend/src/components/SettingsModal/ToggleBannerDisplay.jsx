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
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h6" component="h3">
        Toggle Banner Display
      </Typography>
      <BasicSwitch
        visibleSwitchOn={visibleSwitchOn}
        setVisibleSwitchOn={setVisibleSwitchOn}
      />
    </Box>
  );
};
