import React from "react";
import UserProvider from "../context/User";
import GraphQLClient from "../context/GraphQLClient";
import AppHeader from "../AppHeader";
import CreateFAB from "../CreateFAB";
import Routes from "../Routes";

import "./style.scss";

const BASE_URL = process.env.GJ_APP_API;

function GratitudeJournal() {
  return (
    <div className="gj-app">
      <UserProvider>
        <GraphQLClient baseUrl={BASE_URL}>
          <AppHeader />

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
