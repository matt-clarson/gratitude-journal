import React from "react";
import { Link } from "react-router-dom";
import { formatEntry } from "./utils";
import { ReactComponent as LogicSVG } from "../static/logic.svg";

const RandomEntry = ({ randomEntryResponse }) => (
  <>
    <h3>
      {randomEntryResponse.data?.randomEntry
        ? "One of your journal entries"
        : "You haven't added anything to your journal yet"}
    </h3>
    <LogicSVG width={300} height={200} />

    <div>
      {randomEntryResponse.data?.randomEntry ? (
        <>
          <p>{formatEntry(randomEntryResponse.data.randomEntry)}</p>
          <hr />
          <p>
            {"See your other entries "}
            <Link to="/entries">{"here"}</Link>
            {"."}
          </p>
        </>
      ) : (
        <p>
          {"You can do that by clicking "}
          <Link to="/create">{"here"}</Link>
          {" or on the add button below"}
        </p>
      )}
    </div>
  </>
);

export default RandomEntry;
