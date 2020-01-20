import React from "react";
import { Link } from "react-router-dom";
import JoinedContentBase from "../components/JoinedContentBase";
import { ReactComponent as NatureSVG } from "../static/nature.svg";

const SignUpDetails = () => (
  <JoinedContentBase title="Sign Up">
    <p>
      {"Sign up to the Gratitude Journal. Or, if you already have an account, "}
      <Link to="/log-in">{"click here to login"}</Link>
      {"."}
    </p>
    <NatureSVG width={300} height={300} />
  </JoinedContentBase>
);

export default SignUpDetails;
