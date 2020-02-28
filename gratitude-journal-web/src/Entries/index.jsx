import React, { useCallback, useEffect } from "react";
import { useQuery, useMutation } from "urql";
import { useLocation } from "react-router-dom";
import Section from "../components/Section";
import Spinner from "../components/Spinner";
import EntriesList from "./EntriesList";
import { DELETE_ENTRY, GET_ENTRIES } from "./queries";
import { formatData } from "./utils";

import "./style.scss";

const Entries = () => {
  const location = useLocation();
  const [getEntriesResponse, refetchEntries] = useQuery({
    query: GET_ENTRIES,
    requestPolicy: location.state?.refresh ? "network-only" : "cache-first"
  });
  const [deleteEntryResponse, deleteEntry] = useMutation(DELETE_ENTRY);

  useEffect(() => {
    if (deleteEntryResponse.data?.deleteEntry?.id)
      refetchEntries({ requestPolicy: "network-only" });
  }, [deleteEntryResponse, refetchEntries]);

  const formatDataCallback = useCallback(
    () => formatData(getEntriesResponse.data),
    [getEntriesResponse.data]
  );
  const data = formatDataCallback(getEntriesResponse.data);
  return (
    <div className="gj-entries">
      <Section flat>
        <h2>{"Entries"}</h2>
        {getEntriesResponse.data?.myEntries ? (
          <EntriesList data={data} deleteEntry={id => deleteEntry({ id })} />
        ) : (
          <Spinner tag="span" size="m" message="Loading..." />
        )}
      </Section>
    </div>
  );
};

export default Entries;
