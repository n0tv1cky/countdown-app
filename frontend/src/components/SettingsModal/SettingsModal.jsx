import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SettingsIcon from "@mui/icons-material/Settings";
import { display } from "@mui/system";
import { red } from "@mui/material/colors";
import { ToggleBannerDisplay } from "./ToggleBannerDisplay";
import { BannerDescription } from "./BannerDescription";
import { BannerTargetDateAndTime } from "./BannerTargetDateAndTime";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  height: "fit-content",
  bgcolor: "#1f1f1f",
  border: "2px solid #000",
  boxShadow: 24,
  padding: "4rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "2rem",
};

export default function SettingsModal() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button
        onClick={handleOpen}
        variant="standard"
        startIcon={<SettingsIcon />}
      >
        Settings
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography variant="h3" align="center">
              Settings
            </Typography>
            <ToggleBannerDisplay />
            <BannerDescription />
            <BannerTargetDateAndTime />
            <Button variant="outlined" color="primary" onClick={handleClose}>
              Close
            </Button>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
