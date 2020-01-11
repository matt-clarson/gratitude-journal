import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import Theme from "./components/Theme";
import GratitudeJournal from "./GratitudeJournal";
import * as serviceWorker from "./serviceWorker";

const App = () => (
  <BrowserRouter>
    <Theme
      colours={{
        primary: "#0083b0",
        primaryGradient: "#00b4db",
        secondary: "#ff5e27",
        textOnPrimary: "#ffffff",
        textOnSecondary: "#ffffff",
        textOnSurface: "#000000",
        error: "red"
      }}
    >
      <GratitudeJournal />
    </Theme>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
