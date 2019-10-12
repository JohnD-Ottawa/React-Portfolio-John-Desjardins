import React, { Component } from 'react';
import $ from 'jquery';

import APP_STRINGS from '../config/App.strings';

import '../stylesheets/App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App"></div>
    );
  }
}
