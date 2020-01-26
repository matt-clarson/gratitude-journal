import React from "react";
import { useQuery } from "urql";
import Section from "../components/Section";
import SectionGroup from "../components/SectionGroup";
import Spinner from "../components/Spinner";
import { ReactComponent as ArticleSVG } from "../static/article.svg";
import { ReactComponent as LinkSVG } from "../static/link.svg";
import { RANDOM_ENTRY } from "./queries";
import About from "./About";
import Links from "./Links";
import RandomEntry from "./RandomEntry";

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
          <RandomEntry {...{ randomEntryResponse }} />
        )}
      </Section>

      <Section flat className="gj-home__about">
        <About />
      </Section>

      <Section flat className="gj-home__links">
        <Links />
      </Section>
    </SectionGroup>
  );
};

export default Home;
