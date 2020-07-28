import React from "react";
import App from "../components/App";
import useTitle from "@4leaf.ysh/use-title";

const Root = () => {
  useTitle("Movie Title");

  return <App />;
};

export default Root;
//훅6    yarn add @4leaf.ysh/use-title
