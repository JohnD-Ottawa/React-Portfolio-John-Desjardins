import React, { Component } from "react";
import $ from "jquery";

import {
  getForecast as DarkSky,
  getIcon as DarkIcon
} from "../../global/services/external/darksky";

class city {
  constructor(id, city, provence, country, latitude, longitude) {
    this.id = id;
    this.city = city;
    this.provence = provence;
    this.country = country;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
const COORDINATES = [
  new city("city_001", "Ottawa", "Ontario", "Canada", 45.4125, -75.6972),
  new city("city_002", "Toronto", "Ontario", "Canada", 43.6532, -79.3832),
  new city("city_003", "Montreal", "Quebec", "Canada", 45.5017, -73.4673),
  new city("city_004", "Edmonton", "Alberta", "Canada", 53.5461, -113.4938),
  new city("city_005", "Calgary", "Alberta", "Canada", 51.0447, -114.0719),
  new city("city_006", "Winnipeg", "Manitoba", "Canada", 49.8951, -97.1384),
  new city(
    "city_007",
    "Vancouver",
    "British Columbia",
    "Canada",
    49.2827,
    -123.1207
  )
];

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }
  changeState = new_state => {
    this.setState(new_state);
  };
  componentDidMount() {
    this.setState({ loading: true });
    DarkSky({
      latitude: COORDINATES[0].latitude,
      longitude: COORDINATES[0].longitude,
      callback: this.changeState
    });
  }
  render() {
    return (
      <div className="app p-2">
        {this.state.loading ? (
          <div>loading...</div>
        ) : !this.state.loading && this.state.code === 0 ? (
          <div>
            <i className={DarkIcon(this.state.data.currently.icon)} />2
            <sup>C</sup>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

function Currently(props) {
  return <div />;
}
function Hourly(props) {
  return <div />;
}
function Daily(props) {
  return <div />;
}

export default {
  id: "app_001",
  icon: "far fa-moon",
  title: "Dark Sky Forecast API",
  description: "No description available.",
  application: Application
};
