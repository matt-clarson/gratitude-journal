import React from "react";
import { Switch, Route } from "react-router-dom";

export default () => (
  <Switch>
    <Route path="/" exact>
      <p>{"Homepage"}</p>
    </Route>

    <Route path="/somewhere">
      <p>{"somewhere"}</p>
    </Route>
  </Switch>
);
