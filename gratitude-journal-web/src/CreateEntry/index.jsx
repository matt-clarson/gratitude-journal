import React from "react";
import { useMutation } from "urql";
import JoinedContent from "../components/JoinedContent";
import CreateEntryDetail from "./CreateEntryDetail";
import CreateEntryForm from "./CreateEntryForm";
import { CREATE_ENTRY } from "./queries";

import "./style.scss";

const CreateEntry = () => {
  const [creationResponse, executeCreation] = useMutation(CREATE_ENTRY);
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
