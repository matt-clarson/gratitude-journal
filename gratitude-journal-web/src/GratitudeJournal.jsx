import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import HeaderTitle from "./components/HeaderTitle";
import HeaderActions from "./components/HeaderActions";
import HeaderActionButton from "./components/HeaderActionButton";
import Routes from "./Routes";
import { User } from "./context/User";

function GratitudeJournal() {
  return (
    <div className="gj-app">
      <User.Provider value={{ authorised: false }}>
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

        <main>
          <Routes />
        </main>
      </User.Provider>
    </div>
  );
}

export default GratitudeJournal;
