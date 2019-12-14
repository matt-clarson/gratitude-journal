import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import HeaderTitle from "./components/HeaderTitle";
import Routes from "./Routes";

function GratitudeJournal() {
  return (
    <div className="App">
      <Header>
        <HeaderTitle tag={Link} to="/">
          {"Gratitude Journal"}
        </HeaderTitle>
      </Header>

      <main>
        <Routes />
      </main>
    </div>
  );
}

export default GratitudeJournal;
