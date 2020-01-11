import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import HeaderTitle from "./components/HeaderTitle";
import HeaderActions from "./components/HeaderActions";
import HeaderActionButton from "./components/HeaderActionButton";
import UserProvider from "./context/User";
import GraphQLClient from "./context/GraphQLClient";
import CreateFAB from "./CreateFAB";
import Routes from "./Routes";

import "./common/styles.scss";

const BASE_URL = process.env.GJ_APP_API;

function GratitudeJournal() {
  return (
    <div className="gj-app">
      <UserProvider>
        <GraphQLClient baseUrl={BASE_URL}>
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

          <CreateFAB />
        </GraphQLClient>
      </UserProvider>
    </div>
  );
}

export default GratitudeJournal;
