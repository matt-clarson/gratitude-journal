import React, { useEffect } from "react";
import { useMutation } from "urql";
import { useHistory } from "react-router-dom";
import JoinedContent from "../components/JoinedContent";
import CreateEntryDetail from "./CreateEntryDetail";
import CreateEntryForm from "./CreateEntryForm";
import { CREATE_ENTRY } from "./queries";

import "./style.scss";

const CreateEntry = () => {
  const history = useHistory();
  const [creationResponse, executeCreation] = useMutation(CREATE_ENTRY);
  useEffect(() => {
    if (creationResponse.data?.createEntry?.id) history.push("/entries");
  }, [creationResponse, history]);
  return (
    <div className="gj-create-entry">
      <JoinedContent floatContent="right">
        <CreateEntryDetail />

        <CreateEntryForm {...{ creationResponse, executeCreation }} />
      </JoinedContent>
    </div>
  );
};

export default CreateEntry;
