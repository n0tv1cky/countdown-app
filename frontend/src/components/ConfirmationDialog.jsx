import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ConfirmationDialog({ open, onClose, message }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="simple-confirmation-dialog-title"
      aria-describedby="simple-confirmation-dialog-description"
    >
      <DialogTitle id="simple-confirmation-dialog-title">Notice</DialogTitle>
      <DialogContent>
        <DialogContentText id="simple-confirmation-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}
