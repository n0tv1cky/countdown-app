import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";
import { ToggleBannerDisplay } from "./ToggleBannerDisplay";
import { BannerDescription } from "./BannerDescription";
import { BannerTargetDateAndTime } from "./BannerTargetDateAndTime";
import { BannerLink } from "./BannerLink";
import ConfirmationDialog from "../ConfirmationDialog";
import { updateData } from "../../actions/updateData";

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

export default function SettingsModal({ updateBannerData }) {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [changesSaved, setChangesSaved] = useState(false);
  const [visibleSwitchOn, setVisibleSwitchOn] = useState(true);
  const [description, setDescription] = useState("");
  const [dateAndTime, setDateAndTime] = useState("");
  const [link, setLink] = useState("");

  const handleOpen = () => {
    // const response = readData();
    // if(response.description !== "") {

    // }
    // console.log("response", response);
    setModalOpen(true);
  };

  const handleClose = () => {
    if (!changesSaved) {
      setConfirmationOpen(true);
    } else setModalOpen(false);
  };

  const handleSave = () => {
    // Add all db update functions
    // console.log("dateAndTime: ", dateAndTime);
    const data = {
      description: description,
      targetTime: dateAndTime,
      link: link,
      visible: visibleSwitchOn,
    };
    console.log("Data being sent to /update:", data);
    updateData(data);
    updateBannerData(data);
    setModalOpen(false);
  };

  const handleConfirmationClose = () => {
    setConfirmationOpen(false);
  };

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
        open={modalOpen}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={modalOpen}>
          <Box sx={style}>
            <Typography variant="h3" align="center">
              Settings
            </Typography>
            <ToggleBannerDisplay
              visibleSwitchOn={visibleSwitchOn}
              setVisibleSwitchOn={setVisibleSwitchOn}
            />
            <BannerDescription setDescription={setDescription} />
            <BannerLink setLink={setLink} />
            <BannerTargetDateAndTime setDateAndTime={setDateAndTime} />
            <Button variant="outlined" color="success" onClick={handleSave}>
              Save
            </Button>
          </Box>
        </Fade>
      </Modal>
      <ConfirmationDialog
        open={confirmationOpen}
        onClose={handleConfirmationClose}
        message="Please SAVE changes before exiting"
      />
    </Box>
  );
}
