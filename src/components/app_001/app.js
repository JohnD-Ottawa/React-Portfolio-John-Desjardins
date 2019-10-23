import React, { Component } from "react";
import $ from "jquery";

import { getForecast as DarkSky } from "../../global/services/external/darksky";

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  changeState = new_state => {
    console.log(new_state);
    this.setState(new_state);
  };
  componentDidMount() {
    DarkSky({ latitude: 0, longitude: 0, callback: this.changeState });
  }
  render() {
    return <div className="app">This is a template</div>;
  }
}

export default {
  id: "app_001",
  icon: "fas fa-palette",
  title: "Placeholder Application with a very long title",
  description: "No description available.",
  application: Application
};
