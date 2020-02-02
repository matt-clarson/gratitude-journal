import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Header from "../components/Header";
import HeaderTitle from "../components/HeaderTitle";
import HeaderActions from "../components/HeaderActions";
import HeaderActionButton from "../components/HeaderActionButton";
import AccountInfo from "./AccountInfo";

const AppHeader = () => {
  const match = useRouteMatch("/(welcome|log-in|sign-up)");
  const [open, setOpen] = useState(false);
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
      {!match && <AccountInfo {...{ open, setOpen }} />}
    </>
  );
};

export default AppHeader;
