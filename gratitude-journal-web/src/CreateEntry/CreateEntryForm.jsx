import React from "react";
import Button from "../components/Button";
import ErrorDisplay from "../components/ErrorDisplay";
import Form from "../components/Form";
import FormActions from "../components/FormActions";
import FormContent from "../components/FormContent";
import JoinedContentRaised from "../components/JoinedContentRaised";
import TextField from "../components/TextField";

const CreateEntryForm = ({ creationResponse, executeCreation }) => (
  <JoinedContentRaised
    submitting={creationResponse.fetching}
    tag={Form}
    autoControlled
    onSubmit={executeCreation}
  >
    <FormContent>
      <p>{"What are you grateful for? It could be:"}</p>
      <ul>
        <li>{"Waking up this morning"}</li>
        <li>{"The generosity of friends"}</li>
        <li>{"The music of David Bowie"}</li>
      </ul>
      <p>{"Or it could be anything else you feel grateful for"}</p>
      <TextField
        name="content"
        label="Journal Entry"
        required
        maxLength={100}
        multiline
        fullWidth
      />
    </FormContent>
    <FormContent
      tag={ErrorDisplay}
      error={creationResponse.error?.graphQLErrors}
    ></FormContent>

    <FormActions>
      <Button>{"Post"}</Button>
    </FormActions>
  </JoinedContentRaised>
);

export default CreateEntryForm;
