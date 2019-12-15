import React from "react";
import { Link } from "react-router-dom";
import Splash from "../components/Splash";
import SplashTitle from "../components/SplashTitle";
import SplashTitleHeader from "../components/SplashTitleHeader";
import SplashTitleSubHeader from "../components/SplashTitleSubHeader";
import SplashActions from "../components/SplashActions";
import SplashActionButton from "../components/SplashActionButton";

const Welcome = () => (
  <Splash position="right">
    <SplashTitle>
      <SplashTitleSubHeader position="right">
        {"Welcome to"}
      </SplashTitleSubHeader>
      <SplashTitleHeader>{"Gratitude Journal"}</SplashTitleHeader>
      <SplashTitleSubHeader>
        {"A grateful mind is a healthy mind"}
      </SplashTitleSubHeader>
    </SplashTitle>

    <SplashActions position="centre">
      <SplashActionButton tag={Link} to="/log-in">
        {"Log in"}
      </SplashActionButton>
      <SplashActionButton tag={Link} to="/sign-up">
        {"Sign Up"}
      </SplashActionButton>
    </SplashActions>
  </Splash>
);

export default Welcome;
