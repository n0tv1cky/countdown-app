import * as React from "react";
import Switch from "@mui/material/Switch";
import { Box, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { useState } from "react";

const label = { inputProps: { "aria-label": "Switch demo" } };

const RedSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: red[600],
    "&:hover": {
      backgroundColor: alpha(red[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: red[600],
  },
}));

export default function BasicSwitch({ visibleSwitchOn, setVisibleSwitchOn }) {
  const handleToggle = () => {
    setVisibleSwitchOn(!visibleSwitchOn);
  };

  return (
    <Box>
      <RedSwitch checked={visibleSwitchOn} {...label} onClick={handleToggle} />
    </Box>
  );
}
