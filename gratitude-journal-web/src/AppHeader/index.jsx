import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import HeaderTitle from "../components/HeaderTitle";
import HeaderActions from "../components/HeaderActions";
import HeaderActionButton from "../components/HeaderActionButton";

const AppHeader = () => (
  <Header>
    <HeaderTitle tag={Link} to="/">
      {"Gratitude Journal"}
    </HeaderTitle>

    <HeaderActions>
      <HeaderActionButton
        icon={"account_circle"}
        onClick={() => console.log("account info")}
      />
    </HeaderActions>
  </Header>
);

export default AppHeader;
