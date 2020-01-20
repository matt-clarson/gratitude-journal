import React, { useContext, useEffect, useState } from "react";
import { useMutation } from "urql";
import { useHistory } from "react-router-dom";
import { User } from "../context/User";
import JoinedContent from "../components/JoinedContent";
import { CREATE_USER } from "./queries";
import SignUpDetails from "./SignUpDetails";
import SignUpForm from "./SignUpForm";

import "./style.scss";

const SignUp = () => {
  const history = useHistory();
  const { setUser } = useContext(User);
  const [passwordMismatch, setPasswordMismatch] = useState(null);
  const [signupResponse, executeSignup] = useMutation(CREATE_USER);
  const signup = ({ email, username, password, repeatPassword }) => {
    setPasswordMismatch(null);
    if (password === repeatPassword)
      executeSignup({
        email,
        username,
        password
      });
    else setPasswordMismatch("Passwords do not match");
  };

  useEffect(() => {
    const token = signupResponse.data?.createUser?.token;
    if (token) {
      setUser({ authorised: true, token });
      history.push("/");
    }
  }, [signupResponse, setUser, history]);

  return (
    <div className="gj-signup">
      <JoinedContent>
        <SignUpDetails />

        <SignUpForm
          signup={signup}
          error={passwordMismatch ?? signupResponse.error?.graphQLErrors}
        />
      </JoinedContent>
    </div>
  );
};

export default SignUp;
