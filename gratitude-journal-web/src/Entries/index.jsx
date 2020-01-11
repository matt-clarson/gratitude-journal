import React, { useCallback } from "react";
import { useQuery } from "urql";
import AutoTable from "../components/AutoTable";
import Section from "../components/Section";
import Spinner from "../components/Spinner";
import { GET_ENTRIES } from "./queries";
import { headers, formatData } from "./utils";

import "./style.scss";

const Entries = () => {
  const [response] = useQuery({ query: GET_ENTRIES });
  const formatDataCallback = useCallback(() => formatData(response.data), [
    response.data
  ]);
  const data = formatDataCallback(response.data);
  return (
    <div className="gj-entries">
      <Section flat>
        <h2>{"Entries"}</h2>
        {response.data?.myEntries ? (
          <AutoTable
            title="Your gratitude journal entries"
            {...{ headers, data }}
          />
        ) : (
          <Spinner tag="span" size="m" message="Loading..." />
        )}
      </Section>
    </div>
  );
};

export default Entries;