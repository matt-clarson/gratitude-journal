import React, { useState } from "react";
import { Link } from "react-router-dom";
import JoinedContent from "../components/JoinedContent";
import JoinedContentBase from "../components/JoinedContentBase";
import JoinedContentRaised from "../components/JoinedContentRaised";
import FormContent from "../components/FormContent";
import FormActions from "../components/FormActions";
import TextField from "../components/TextField";
import Button from "../components/Button";

import { ReactComponent as Password } from "../static/password.svg";
import "./styles/log-in.scss";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="gj-login">
      <JoinedContent>
        <JoinedContentBase title="Login">
          <p>
            {
              "Log in using your details. Or, if you don't already have an account, "
            }
            <Link to="sign-up">{"click here to sign up"}</Link>
            {"."}
          </p>
          <Password height={200} width={300} />
        </JoinedContentBase>
        <JoinedContentRaised isForm>
          <FormContent>
            <TextField
              label="Username"
              value={username}
              onChange={({ target: { value } }) => setUsername(value)}
              required
              minLength={5}
              maxLength={32}
            />

            <TextField
              label="Password"
              value={password}
              onChange={({ target: { value } }) => setPassword(value)}
              type="password"
              required
            />
          </FormContent>

          <FormActions>
            <Button>{"Log In"}</Button>
          </FormActions>
        </JoinedContentRaised>
      </JoinedContent>
    </div>
  );
};

export default LogIn;
