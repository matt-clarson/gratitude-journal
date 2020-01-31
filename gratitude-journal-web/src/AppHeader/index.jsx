import React, { useContext, useState } from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { useQuery } from "urql";
import { User } from "../context/User";
import Button from "../components/Button";
import Dialog from "../components/Dialog";
import DialogContent from "../components/DialogContent";
import DialogTitle from "../components/DialogTitle";
import Header from "../components/Header";
import HeaderTitle from "../components/HeaderTitle";
import HeaderActions from "../components/HeaderActions";
import HeaderActionButton from "../components/HeaderActionButton";
import { USER_INFO } from "./queries";

const AppHeader = () => {
  const match = useRouteMatch("/(welcome|log-in|sign-up)");
  const [open, setOpen] = useState(false);
  const [userInfoResponse] = useQuery({ query: USER_INFO });
  const history = useHistory();
  const { logoutUser } = useContext(User);
  const logout = () => {
    logoutUser();
    setOpen(false);
    history.push("/welcome");
  };
  return (
    <>
      <Header>
        <HeaderTitle tag={Link} to="/">
          {"Gratitude Journal"}
        </HeaderTitle>

        <HeaderActions>
          {!match && (
            <HeaderActionButton
              title="Account Info"
              icon={"account_circle"}
              onClick={() => setOpen(true)}
            />
          )}
        </HeaderActions>
      </Header>
      <Dialog
        onClick={console.log.bind(console)}
        open={open}
        onClose={() => setOpen(false)}
        size="m"
      >
        <DialogTitle closeButton>{"Account Information"}</DialogTitle>
        <DialogContent>
          <h5>{"Username:"}</h5>
          <p>{userInfoResponse.data?.me?.username ?? "Loading..."}</p>
          <h5>{"Email:"}</h5>
          <p>{userInfoResponse.data?.me?.email ?? "Loading..."}</p>
          <Button onClick={logout}>{"Logout"}</Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AppHeader;
