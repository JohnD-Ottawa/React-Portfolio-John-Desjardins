import React, { Component } from "react";
import $ from "jquery";

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log(`${app.title} has mounted successfully!`);
  }
  changeState = (new_state, key) => {
    this.setState({ [key]: new_state });
  };
  render() {
    return <div className="template">This is a template</div>;
  }
}

const app = {
  id: "app_002",
  icon: "ICO_CLOUD",
  title: "Local Weather Forecast",
  description: "No description available.",
  application: Application
};

export default app;
