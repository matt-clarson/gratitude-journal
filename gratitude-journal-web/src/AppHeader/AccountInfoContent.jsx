import React from "react";
import Button from "../components/Button";
import DialogActions from "../components/DialogActions";
import DialogContent from "../components/DialogContent";

const AccountInfoContent = ({
  userInfoResponse,
  setDeletingAccount,
  logout
}) => (
  <>
    <DialogContent>
      <h5>{"Username:"}</h5>
      <p>{userInfoResponse.data?.me?.username ?? "Loading..."}</p>
      <h5>{"Email:"}</h5>
      <p>{userInfoResponse.data?.me?.email ?? "Loading..."}</p>
    </DialogContent>
    <DialogActions>
      <Button danger onClick={() => setDeletingAccount(true)}>
        {"Delete Account"}
      </Button>
      <Button onClick={logout}>{"Logout"}</Button>
    </DialogActions>
  </>
);

export default AccountInfoContent;
