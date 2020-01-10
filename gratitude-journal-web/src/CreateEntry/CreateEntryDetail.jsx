import React from "react";
import JoinedContentBase from "../components/JoinedContentBase";
import { ReactComponent as Dreamer } from "../static/dreamer.svg";

const CreateEntryDetail = () => (
  <JoinedContentBase title="Add Entry">
    <h4>{"Add an entry to your gratitude journal"}</h4>
    <Dreamer width={300} height={200} />
  </JoinedContentBase>
);
export default CreateEntryDetail;
