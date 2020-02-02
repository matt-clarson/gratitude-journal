import React, { useCallback, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation, useQuery } from "urql";
import { User } from "../context/User";
import Dialog from "../components/Dialog";
import DialogTitle from "../components/DialogTitle";
import { DELETE_ACCOUNT, USER_INFO } from "./queries";
import AccountInfoContent from "./AccountInfoContent";
import DeleteAccountForm from "./DeleteAccountForm";

const AccountInfo = ({ open, setOpen }) => {
  const [deletingAccount, setDeletingAccount] = useState(false);
  const [userInfoResponse] = useQuery({ query: USER_INFO });
  const [deleteAccountResponse, executeAccountDeletion] = useMutation(
    DELETE_ACCOUNT
  );
  const history = useHistory();
  const { logoutUser } = useContext(User);
  const logout = useCallback(() => {
    if (open) {
      logoutUser();
      setOpen(false);
      history.push("/welcome");
    }
  }, [open, logoutUser, setOpen, history]);
  useEffect(() => {
    if (deleteAccountResponse.data?.deleteUser?.id) logout();
  }, [deleteAccountResponse.data, logout]);
  return (
    <Dialog
      open={open}
      onClose={() => {
        setDeletingAccount(false);
        setOpen(false);
      }}
      size="m"
    >
      <DialogTitle closeButton>{"Account Information"}</DialogTitle>
      {deletingAccount ? (
        <DeleteAccountForm
          {...{
            deleteAccountResponse,
            executeAccountDeletion,
            setDeletingAccount
          }}
        />
      ) : (
        <AccountInfoContent
          {...{ userInfoResponse, setDeletingAccount, logout }}
        />
      )}
    </Dialog>
  );
};

export default AccountInfo;
