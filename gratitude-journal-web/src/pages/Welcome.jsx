import React from "react";
import Splash from "../components/Splash";
import SplashTitle from "../components/SplashTitle";
import SplashTitleHeader from "../components/SplashTitleHeader";
import SplashTitleSubHeader from "../components/SplashTitleSubHeader";

const Welcome = () => (
  <Splash right>
    <SplashTitle>
      <SplashTitleSubHeader right>{"Welcome to"}</SplashTitleSubHeader>
      <SplashTitleHeader>{"Gratitude Journal"}</SplashTitleHeader>
      <SplashTitleSubHeader>
        {"A grateful mind is a healthy mind"}
      </SplashTitleSubHeader>
    </SplashTitle>
  </Splash>
);

export default Welcome;
