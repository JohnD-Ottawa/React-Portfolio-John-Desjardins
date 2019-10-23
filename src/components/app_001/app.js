import React, { Component } from "react";
import $ from "jquery";

import {
  getForecast as DarkSky,
  getIcon as DarkIcon
} from "../../global/services/external/darksky";

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }
  changeState = new_state => {
    console.log(new_state);
    this.setState(new_state);
  };
  componentWillMount() {
    this.setState({ loading: true });
    DarkSky({
      latitude: 0,
      longitude: 0,
      callback: this.changeState,
      exclude: "[minutely]"
    });
  }
  render() {
    return (
      <div className="app p-2">
        {this.state.loading ? (
          <div>loading...</div>
        ) : (
          <i className={DarkIcon(this.state.data.currently.icon)} />
        )}
      </div>
    );
  }
}

export default {
  id: "app_001",
  icon: "far fa-moon",
  title: "Dark Sky Forecast API",
  description: "No description available.",
  application: Application
};
