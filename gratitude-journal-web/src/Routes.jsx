import React from "react";
import { Switch, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";

export default () => (
  <Switch>
    <Route path="/" exact>
      <p>{"Homepage"}</p>
    </Route>

    <Route path="/welcome">
      <Welcome />
    </Route>

    <Route path="/somewhere">
      <p>{"somewhere"}</p>
    </Route>
  </Switch>
);
