import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "urql";
import { useLocation, useHistory } from "react-router-dom";
import { User } from "../context/User";
import ErrorDisplay from "../components/ErrorDisplay";
import JoinedContent from "../components/JoinedContent";
import JoinedContentBase from "../components/JoinedContentBase";
import JoinedContentRaised from "../components/JoinedContentRaised";
import FormContent from "../components/FormContent";
import FormActions from "../components/FormActions";
import TextField from "../components/TextField";
import Button from "../components/Button";

import { ReactComponent as Password } from "../static/password.svg";
import "./styles/log-in.scss";

const LOGIN = `
  mutation Login($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;

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
        <JoinedContentBase title="Login">
          <p>
            {
              "Log in using your details. Or, if you don't already have an account, "
            }
            <Link to="/sign-up">{"click here to sign up"}</Link>
            {"."}
          </p>
          <Password height={200} width={300} />
        </JoinedContentBase>
        <JoinedContentRaised isForm autoControlled onSubmit={executeLogin}>
          <FormContent>
            <h3>{"Please enter your username and password"}</h3>
            <TextField
              name="username"
              label="Username"
              required
              minLength={5}
              maxLength={32}
            />

            <TextField
              name="password"
              label="Password"
              type="password"
              required
            />
          </FormContent>
          <FormContent
            tag={ErrorDisplay}
            error={loginResponse.error?.graphQLErrors}
          ></FormContent>
          <FormActions>
            <Button disabled={loginResponse.fetching}>{"Log In"}</Button>
          </FormActions>
        </JoinedContentRaised>
      </JoinedContent>
    </div>
  );
};

export default LogIn;
