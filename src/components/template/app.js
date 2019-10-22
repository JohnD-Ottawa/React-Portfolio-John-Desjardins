import React, { Component } from "react";
import $ from "jquery";

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className="template">This is a template</div>;
  }
}

export default {
  id: "app_000",
  icon: "far fa-copy",
  title: "Template Application",
  description: "No description available.",
  application: Application
};
