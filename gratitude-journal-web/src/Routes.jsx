import React from "react";
import { Switch, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import LogIn from "./pages/LogIn";

export default () => (
  <Switch>
    <Route path="/" exact>
      <p>{"Homepage"}</p>
    </Route>

    <Route path="/welcome">
      <Welcome />
    </Route>

    <Route path="/log-in">
      <LogIn />
    </Route>

    <Route path="/somewhere">
      <p>{"somewhere"}</p>
    </Route>
  </Switch>
);
