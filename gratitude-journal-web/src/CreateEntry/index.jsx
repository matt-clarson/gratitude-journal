import React from "react";
import JoinedContent from "../components/JoinedContent";
import JoinedContentBase from "../components/JoinedContentBase";
import JoinedContentRaised from "../components/JoinedContentRaised";
import Button from "../components/Button";
import Form from "../components/Form";
import FormContent from "../components/FormContent";
import FormActions from "../components/FormActions";
import TextField from "../components/TextField";
import { ReactComponent as Dreamer } from "../static/dreamer.svg";

import "./style.scss";

const CreateEntry = () => {
  return (
    <div className="gj-create-entry">
      <JoinedContent floatContent="right">
        <JoinedContentBase title="Add Entry">
          <h4>{"Add an entry to your gratitude journal"}</h4>
          <Dreamer width={300} height={200} />
        </JoinedContentBase>

        <JoinedContentRaised tag={Form} autoControlled>
          <FormContent>
            <p>{"What are you grateful for? It could be:"}</p>
            <ul>
              <li>{"Waking up this morning"}</li>
              <li>{"The generosity of friends"}</li>
              <li>{"The music of David Bowie"}</li>
            </ul>
            <p>{"Or it could be anything else you feel grateful for"}</p>
            <TextField
              name="entry"
              label="Journal Entry"
              required
              maxLength={100}
              multiline
              fullWidth
            />
          </FormContent>

          <FormActions>
            <Button>{"Post"}</Button>
          </FormActions>
        </JoinedContentRaised>
      </JoinedContent>
    </div>
  );
};

export default CreateEntry;
