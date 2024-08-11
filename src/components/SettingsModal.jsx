import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SettingsIcon from "@mui/icons-material/Settings";
import BasicSwitch from "./BasicSwitch";
import TextField from "@mui/material/TextField";
import { display } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40rem",
  height: "40rem",
  bgcolor: "#1f1f1f",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

export default function SettingsModal() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography
                // id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Toggle Banner Display
              </Typography>
              <BasicSwitch />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography variant="h6">Banner Description</Typography>
              <TextField
                id="outlined-multiline-flexible"
                multiline
                rows={4}
                // label="Outlined secondary"
                color="warning"
                focused
                sx={{
                  width: "60%",
                }}
              />
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
