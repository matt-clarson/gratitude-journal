import React, { useContext, useEffect } from "react";
import { useMutation } from "urql";
import { useLocation, useHistory } from "react-router-dom";
import { User } from "../context/User";
import JoinedContent from "../components/JoinedContent";
import { LOGIN } from "./queries";
import LogInDetails from "./LogInDetails";
import LogInForm from "./LogInForm";

import "./style.scss";

const LogIn = () => {
  const location = useLocation();
  const history = useHistory();
  const { setUser } = useContext(User);
  const [loginResponse, executeLogin] = useMutation(LOGIN);
  useEffect(() => {
    const token = loginResponse.data?.tokenAuth?.token;
    if (token) {
      setUser({ authorised: true, token });
      history.push(location.state?.from ?? "/");
    }
  });
  return (
    <div className="gj-login">
      <JoinedContent>
        <LogInDetails />

        <LogInForm {...{ executeLogin, loginResponse }} />
      </JoinedContent>
    </div>
  );
};

export default LogIn;
