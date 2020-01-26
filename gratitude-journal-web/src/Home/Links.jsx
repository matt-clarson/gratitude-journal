import React from "react";
import { ReactComponent as LinkSVG } from "../static/link.svg";

const Links = () => (
  <>
    <h3>{"Useful links and resources"}</h3>
    <LinkSVG width={230} height={150} />
    <ul>
      <li>
        <a href="https://whish.stanford.edu/wp-content/uploads/2018/11/GratitudeArticle.pdf">
          {
            "Counting Blessings Versus Burdens - Emmons, R.A. and McCullough, M.E. (2003)"
          }
        </a>
      </li>
      <li>
        <a href="http://positivepsychology.org.uk/gratitude/">
          {"Gratitude and Positive Psychology"}
        </a>
      </li>
    </ul>
  </>
);

export default Links;
