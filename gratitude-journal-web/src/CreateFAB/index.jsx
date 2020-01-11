import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import FloatingActionButton from "../components/FloatingActionButton";

import "./style.scss";

const CreateFAB = () => {
  const match = useRouteMatch("/(create|welcome|log-in)");
  return (
    !match && (
      <FloatingActionButton
        title="Create Entry"
        tag={Link}
        to="/create"
        className="gj-fab"
        icon="add"
      />
    )
  );
};

export default CreateFAB;
