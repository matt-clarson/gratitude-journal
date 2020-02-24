import React from "react";
import Dialog from "../components/Dialog";
import DialogContent from "../components/DialogContent";
import DialogTitle from "../components/DialogTitle";

const AppInfo = ({ open, setOpen }) => (
  <Dialog open={open} onClose={() => setOpen(false)} size="s">
    <DialogTitle closeButton>{"App Info"}</DialogTitle>
    <DialogContent>
      <h5>{"Build"}</h5>
      <p>{process.env.GJ_APP_BUILD ?? "No build info found"}</p>
    </DialogContent>
  </Dialog>
);

export default AppInfo;
