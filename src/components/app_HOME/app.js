import React, { Component } from "react";
import $ from "jquery";

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className="app p-2">This is a Home Page</div>;
  }
}

export default {
  id: "app_HOME",
  icon: "fas fa-home",
  title: "Home",
  description: "No description available.",
  application: Application
};
