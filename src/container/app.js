import React, { Component } from "react";
import $ from "jquery";

import AppNavTop from "./components/app.nav";
import AppNavDrawerOpen from "./components/app.drawer";
import AppContent from "./components/app.content";

import config from "../components/config";

import "./app.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "app_HOME",
      language: "lang_EN",
      drawer: {
        open: true
      }
    };
  }
  changeState = new_state => {
    const that = this;
    return function(e) {
      that.setState(new_state);
    };
  };
  render() {
    return (
      <div className="App">
        <AppNavTop changeState={this.changeState} />
        <div className="d-flex flex-row App-Content align-items-stretch">
          <AppNavDrawerOpen
            list={config}
            active={this.state.active}
            changeState={this.changeState}
          />
          <div className="text-white flex-grow-1 oa">
            <AppContent list={config} active={this.state.active} />
          </div>
        </div>
      </div>
    );
  }
}
