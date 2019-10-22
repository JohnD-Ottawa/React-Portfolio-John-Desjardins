import React from "react";
import home from "../../components/app_HOME/app";

let Home = home.application;

export default function Content(props) {
  switch (props.active) {
    case "app_HOME":
      return <Home />;
    default:
      let item = props.list.find(item => item.id === props.active);
      let Content = item.application;
      return <Content />;
  }
}
