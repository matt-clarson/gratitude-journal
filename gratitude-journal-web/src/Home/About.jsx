import React from "react";
import { ReactComponent as ArticleSVG } from "../static/article.svg";
import { ReactComponent as SpeakSVG } from "../static/speak.svg";

const About = () => (
  <>
    <h3>{"What is a gratitude journal?"}</h3>
    <p>
      {
        "A gratitude journal is simply a tool to keep track of the things that you’re grateful for. By keeping a record of the good things in you life, your attention is focused on positive events rather than the negative ones."
      }
    </p>
    <ArticleSVG
      className="gj-home__about__article-svg"
      width={250}
      height={200}
    />
    <p>
      {
        "Research on gratitude journaling has shown benefits such as greater happiness, life satisfaction, and connection to others, as well as better sleep, increased productivity, and easing the symptoms of depression."
      }
    </p>
    <p>
      {
        "It’s easy to start and shouldn’t take more than 10 minutes per day. All you need to do is write down three good things. This could be something you’re grateful for like the sunshine or your morning coffee, something that went well today such as completing your to do list, or a positive event like getting a promotion. Try to repeat this everyday at roughly the same time. "
      }
    </p>
    <p>
      {
        "The more detailed you can make your entry the better. It’s also important to reflect on your part, even if it is simply that you noticed the good thing. "
      }
    </p>
    <SpeakSVG className="gj-home__about__speak-svg" width={250} height={220} />
    <ul>
      {"Try to include the following:"}
      <li>
        {
          "If it is something that you’re grateful for, how does it make you feel?"
        }
      </li>
      <li>{"If it is something that went well, why did it go well?"}</li>
      <li>
        {
          "If it was a positive event, write down exactly what happened in as much detail as possible. What did you do or say? Were other people involved? "
        }
      </li>
      <li>{"What was your role in bringing about the good thing?"}</li>
    </ul>
  </>
);

export default About;
