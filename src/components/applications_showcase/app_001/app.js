import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "jquery";

import "./app.css";

import {
  getForecast as DarkSky,
  getIcon as DarkIcon
} from "../../../global/services/external/darksky";

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecast: {
        loading: false
      }
    };
  }

  componentDidMount() {
    console.log(`${app.title} has mounted successfully!`);
    this.changeState({ loading: true }, "forecast");

    // const oldCoords = localStorage.getItem('coords');
    // if (oldCoords) {
    //   showWeather(JSON.parse(oldCoords));
    // }
    // navigator.geolocation.getCurrentPosition(pos => {
    //   const newCoords = JSON.stringify(pos.coords);
    //   localStorage.setItem('coords', newCoords);
    //   showWeather(newCoords);
    // }, handleError);

    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    if (navigator.geolocation) {
      console.warn("Geolocation Retrieved, getting Forecast Data!");
      navigator.geolocation.getCurrentPosition(
        position =>
          DarkSky({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            callback: this.changeState,
            state: "forecast"
          }),
        error => this.showError(error),
        options
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  showError = error => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.error("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        console.error("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        console.error("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        console.error("An unknown error occurred.");
        break;
    }
  };

  changeState = (new_state, key) => {
    this.setState({ [key]: new_state });
  };

  render() {
    return (
      <div className="app001 d-flex align-items-center justify-content-center">
        {this.state.forecast.loading ? (
          <FontAwesomeIcon icon="sync-alt" size="2x" spin />
        ) : this.state.forecast.data ? (
          <div className="p-2 w-100">
            <p className="">{JSON.stringify(this.state.forecast.data)}</p>
          </div>
        ) : (
          <Jumbotron title="Error!" />
        )}
      </div>
    );
  }
}

function Jumbotron(props) {
  return (
    <div class="jumbotron m-0">
      <h1 class="display-4">{props.title}</h1>
      <p class="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr class="my-4 text-light" />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <p class="btn btn-primary btn-lg" role="button">
        Learn more
      </p>
    </div>
  );
}

const app = {
  id: "app_002",
  icon: "ICO_CLOUD",
  title: "Local Weather Forecast",
  description: "No description available.",
  application: Application
};

export default app;
