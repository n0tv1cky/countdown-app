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
import CustomDateTimePicker from "./CustomDateTimePicker";
import { red } from "@mui/material/colors";

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
              <BasicSwitch />
            </Box>
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
            <Button variant="outlined" color="primary">
              Close
            </Button>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
