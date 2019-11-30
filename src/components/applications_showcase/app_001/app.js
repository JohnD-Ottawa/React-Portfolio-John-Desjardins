import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './app.css';

import { getForecast as DarkSky } from '../../../global/services/external/darksky';
import { getIPdata } from '../../../global/services/external/ipapi';

const default_info = {
  city: 'Ottawa',
  region: 'Ontario',
  region_code: 'ON',
  country_name: 'Canada',
  latitude: 45.3438,
  longitude: -75.7157,
  timezone: 'America/Toronto',
  utc_offset: '-0500'
};

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecast: {
        loading: true
      }
    };
  }

  componentDidMount() {
    console.log(`${app.title} has mounted successfully!`);
    getIPdata().then(ipData => {
      switch (ipData.code) {
        // Success - Get Forecast w/ IP info
        case 0:
          DarkSky({
            latitude: ipData.data.latitude,
            longitude: ipData.data.longitude
          }).then(forecast => {
            this.setForecast(forecast, ipData);
          });
          break;
        // Failure - Get Forecast w/ Default info
        default:
          DarkSky({
            latitude: default_info.latitude,
            longitude: default_info.longitude
          }).then(forecast => {
            this.setForecast(forecast, ipData);
          });
          break;
      }
    });
  }

  setForecast = (forecast, ipData) => {
    switch (forecast.code) {
      // Success - Set State with Forecast Data
      case 0:
        this.changeState(
          {
            loading: false,
            data: {
              forecast: forecast.data,
              ipData: ipData.data
            }
          },
          'forecast'
        );
        break;
      // Failure - Set State with Error Msg
      default:
        this.changeState({ loading: false, error: forecast.error }, 'forecast');
        break;
    }
  };

  changeState = (new_state, key) => {
    this.setState({ [key]: new_state });
  };

  render() {
    console.log(this.state);
    return (
      <div className='app001 d-flex align-items-center justify-content-center'>
        {this.state.forecast.loading ? (
          <FontAwesomeIcon icon='sync-alt' size='2x' spin />
        ) : this.state.forecast.data ? (
          <Jumbotron title='Success' />
        ) : (
          <Jumbotron title='Error' />
        )}
      </div>
    );
  }
}

function Jumbotron(props) {
  return (
    <div class='jumbotron m-0'>
      <h1 class='display-4'>{props.title}</h1>
      <p class='lead'>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr class='my-4 text-light' />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
    </div>
  );
}

const app = {
  id: 'app_002',
  icon: ['fas', 'moon'],
  title: 'Local Weather Forecast',
  description: 'No description available.',
  application: Application
};

export default app;
