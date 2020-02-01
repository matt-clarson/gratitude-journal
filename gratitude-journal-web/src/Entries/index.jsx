import React, { useCallback, useEffect } from "react";
import { useQuery, useMutation } from "urql";
import { Link } from "react-router-dom";
import AutoTable from "../components/AutoTable";
import Section from "../components/Section";
import Spinner from "../components/Spinner";
import { DELETE_ENTRY, GET_ENTRIES } from "./queries";
import { headers, formatData } from "./utils";

import "./style.scss";

const Entries = () => {
  const [getEntriesResponse, refetchEntries] = useQuery({
    query: GET_ENTRIES
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
          <AutoTable
            title="Your gratitude journal entries"
            actionColumn="delete"
            actionColumnAction={id => deleteEntry({ id })}
            actionColumnTitle="Delete Entry"
            emptyMessage={
              <span>
                {"You do not have any entries, "}
                <Link to="/create">{"click here to add an entry"}</Link>
                {"."}
              </span>
            }
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
