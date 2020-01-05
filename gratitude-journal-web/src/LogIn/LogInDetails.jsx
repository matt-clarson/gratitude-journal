import React from "react";
import { Link } from "react-router-dom";
import JoinedContentBase from "../components/JoinedContentBase";
import { ReactComponent as Password } from "../static/password.svg";

const LogInDetails = () => (
  <JoinedContentBase title="Login">
    <p>
      {"Log in using your details. Or, if you don't already have an account, "}
      <Link to="/sign-up">{"click here to sign up"}</Link>
      {"."}
    </p>
    <Password height={200} width={300} />
  </JoinedContentBase>
);

export default LogInDetails;
