import React, { Component } from "react";

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
    return <div className="app p-2">This is a Home Page</div>;
  }
}

const app = {
  id: "app_HOME",
  icon: "ICO_HOME",
  title: "Home",
  description: "No description available.",
  application: Application
};

export default app;
