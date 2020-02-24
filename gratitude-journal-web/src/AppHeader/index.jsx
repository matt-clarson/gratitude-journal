import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Header from "../components/Header";
import HeaderTitle from "../components/HeaderTitle";
import HeaderActions from "../components/HeaderActions";
import HeaderActionButton from "../components/HeaderActionButton";
import AccountInfo from "./AccountInfo";
import AppInfo from "./AppInfo";

const AppHeader = () => {
  const match = useRouteMatch("/(welcome|log-in|sign-up)");
  const [accountInfoOpen, setAccountInfoOpen] = useState(false);
  const [appInfoOpen, setAppInfoOpen] = useState(false);
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
              onClick={() => setAccountInfoOpen(true)}
            />
          )}
          <HeaderActionButton
            title="App Info"
            icon={"help"}
            onClick={() => setAppInfoOpen(true)}
          />
        </HeaderActions>
      </Header>
      {!match && (
        <AccountInfo open={accountInfoOpen} setOpen={setAccountInfoOpen} />
      )}
      <AppInfo open={appInfoOpen} setOpen={setAppInfoOpen} />
    </>
  );
};

export default AppHeader;
