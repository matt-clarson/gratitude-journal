import React from "react";
import Button from "../components/Button";
import DialogContent from "../components/DialogContent";
import ErrorDisplay from "../components/ErrorDisplay";
import Form from "../components/Form";
import FormActions from "../components/FormActions";
import FormContent from "../components/FormContent";
import Icon from "../components/Icon";
import TextField from "../components/TextField";

const DeleteAccountForm = ({
  deleteAccountResponse,
  executeAccountDeletion,
  setDeletingAccount
}) => (
  <DialogContent
    tag={Form}
    autoControlled
    submitting={deleteAccountResponse.loading}
    onSubmit={executeAccountDeletion}
  >
    <FormContent>
      <p>
        <Icon icon="warning" />
        {
          "This will permanently delete your account and all data associated with it."
        }
      </p>
      <p>{"Enter your password to delete your account"}</p>
      <TextField name="password" label="Password" type="password" required />
    </FormContent>
    <FormContent
      tag={ErrorDisplay}
      error={deleteAccountResponse.error?.graphQLErrors}
    />
    <FormActions>
      <Button type="reset" onClick={() => setDeletingAccount(false)}>
        {"Cancel"}
      </Button>
      <Button danger>{"Delete"}</Button>
    </FormActions>
  </DialogContent>
);

export default DeleteAccountForm;
