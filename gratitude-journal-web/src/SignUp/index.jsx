import React, { useContext, useEffect, useState } from "react";
import pick from "lodash/pick";
import { useMutation, useQuery } from "urql";
import { useHistory } from "react-router-dom";
import { User } from "../context/User";
import JoinedContent from "../components/JoinedContent";
import { LOGIN } from "../LogIn/queries";
import { CREATE_USER } from "./queries";
import SignUpDetails from "./SignUpDetails";
import SignUpForm from "./SignUpForm";

import "./style.scss";

const SignUp = () => {
  const [signupResponse, executeSignup] = useMutation(CREATE_USER);
  const [signupDetails, setSignupDetails] = useState(null);
  const [passwordMismatch, setPasswordMismatch] = useState(null);
  const signup = ({ email, username, password, repeatPassword }) => {
    setPasswordMismatch(null);
    setSignupDetails({ username, password });
    if (password === repeatPassword)
      executeSignup({
        email,
        username,
        password
      });
    else setPasswordMismatch("Passwords do not match");
  };

  const history = useHistory();
  const { setUser } = useContext(User);
  const [loginResponse] = useQuery({
    query: LOGIN,
    pause: signupResponse.data?.createUser?.user?.isActive,
    variables: pick(signupDetails, "username", "password")
  });

  useEffect(() => {
    const token = loginResponse.data?.tokenAuth?.token;
    if (token) {
      setUser({ authorised: true, token });
      history.push("/");
    }
  }, [loginResponse, setUser, history]);

  return (
    <div className="gj-signup">
      <JoinedContent>
        <SignUpDetails />

        <SignUpForm
          signup={signup}
          error={
            passwordMismatch ??
            signupResponse.error?.graphQLErrors ??
            loginResponse.error?.graphQLErrors
          }
        />
      </JoinedContent>
    </div>
  );
};

export default SignUp;
