import React, { Component } from "react";
import $ from "jquery";

import { getRandomInclusive } from "../../../global/services/math.services";

// import {
//   getForecast as DarkSky,
//   getIcon as DarkIcon
// } from "../../global/services/external/darksky";

// DarkSky({
//   latitude: 0,
//   longitude: 0,
//   callback: this.changeState,
//   state: "DarkSky"
// });

// import getRandomUsers from "../../global/services/external/randomuser";

// getRandomUsers({
//   state: "RandomUser",
//   callback: this.changeState
// });

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  changeState = (new_state, key) => {
    this.setState({ [key]: new_state });
  };
  componentDidMount() {
    console.log(`${app.title} has mounted successfully!`);
  }
  render() {
    return <div />;
  }
}

const app = {
  id: "app_001",
  icon: "ICO_RANDOM",
  title: "Random Number Generator",
  description: "No description available.",
  application: Application
};

export default app;
