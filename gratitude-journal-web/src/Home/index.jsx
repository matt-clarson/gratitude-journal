import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "urql";
import Section from "../components/Section";
import SectionGroup from "../components/SectionGroup";
import Spinner from "../components/Spinner";
import { ReactComponent as ArticleSVG } from "../static/article.svg";
import { ReactComponent as LinkSVG } from "../static/link.svg";
import { ReactComponent as LogicSVG } from "../static/logic.svg";
import { RANDOM_ENTRY } from "./queries";
import { formatEntry } from "./utils";

import "./style.scss";

const Home = () => {
  const [randomEntryResponse] = useQuery({
    query: RANDOM_ENTRY
  });
  return (
    <SectionGroup className="gj-home">
      <Section flat className="gj-home__highlight">
        {randomEntryResponse.fetching ? (
          <Spinner size="m" message="Loading..." />
        ) : (
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
        )}
      </Section>

      <Section flat className="gj-home__about">
        <h3>{"What is a gratitude journal?"}</h3>
        <ArticleSVG width={250} height={200} />
        <p>{"Description of gratitude journals goes here"}</p>
      </Section>

      <Section flat className="gj-home__links">
        <h3>{"Useful links and resources"}</h3>
        <LinkSVG width={230} height={150} />
        <ul>
          <li>{"A list of links"}</li>
          <li>{"Should go here"}</li>
        </ul>
      </Section>
    </SectionGroup>
  );
};

export default Home;
