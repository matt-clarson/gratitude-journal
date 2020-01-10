import React from "react";

import Button from "../components/Button";
import ErrorDisplay from "../components/ErrorDisplay";
import Form from "../components/Form";
import FormActions from "../components/FormActions";
import FormContent from "../components/FormContent";
import JoinedContentRaised from "../components/JoinedContentRaised";
import TextField from "../components/TextField";

const LogInForm = ({ executeLogin, loginResponse }) => (
  <JoinedContentRaised
    tag={Form}
    submitting={loginResponse.fetching}
    autoControlled
    onSubmit={executeLogin}
  >
    <FormContent>
      <h3>{"Please enter your username and password"}</h3>
      <TextField
        name="username"
        label="Username"
        required
        minLength={5}
        maxLength={32}
      />

      <TextField name="password" label="Password" type="password" required />
    </FormContent>
    <FormContent
      tag={ErrorDisplay}
      error={loginResponse.error?.graphQLErrors}
    ></FormContent>
    <FormActions>
      <Button>{"Log In"}</Button>
    </FormActions>
  </JoinedContentRaised>
);

export default LogInForm;
