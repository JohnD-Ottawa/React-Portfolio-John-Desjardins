import React, { Component } from "react";
import $ from "jquery";

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className="app">This is a template</div>;
  }
}

export default {
  id: "app_001",
  icon: "fas fa-palette",
  title: "Placeholder Application",
  description: "No description available.",
  application: Application
};
