import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Welcome from "./pages/Welcome";
import LogIn from "./pages/LogIn";
import { User } from "./context/User";

const AuthRoute = ({ children, ...props }) => {
  const { user } = useContext(User);
  return (
    <Route
      {...props}
      render={({ location }) =>
        user.authorised ? (
          children
        ) : (
          <Redirect to={{ pathname: "/welcome", state: { from: location } }} />
        )
      }
    />
  );
};

export default () => (
  <Switch>
    <AuthRoute path="/" exact>
      <p>{"Homepage"}</p>
    </AuthRoute>

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
