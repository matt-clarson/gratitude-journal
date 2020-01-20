import React from "react";
import Button from "../components/Button";
import ErrorDisplay from "../components/ErrorDisplay";
import Form from "../components/Form";
import FormActions from "../components/FormActions";
import FormContent from "../components/FormContent";
import JoinedContentRaised from "../components/JoinedContentRaised";
import TextField from "../components/TextField";

const SignUpForm = ({ signup, error }) => (
  <JoinedContentRaised tag={Form} autoControlled onSubmit={signup}>
    <FormContent>
      <h3>{"Please enter your email address, username, and password"}</h3>
      <TextField name="email" label="Email" type="email" required />
      <TextField
        name="username"
        label="Username"
        required
        minLength={5}
        maxLength={32}
      />
      <TextField name="password" label="Password" type="password" required />
      <TextField
        name="repeatPassword"
        label="Password (Again)"
        type="password"
        required
      />
    </FormContent>
    <FormContent tag={ErrorDisplay} error={error} />
    <FormActions>
      <Button>{"Sign Up"}</Button>
    </FormActions>
  </JoinedContentRaised>
);

export default SignUpForm;
