import React from "react";

const HOME = "app_HOME";

export default function AppNavTop(props) {
  return (
    <nav className="App-TopNav navbar navbar-dark fixed-top d-flex align-items-center justify-content-between">
      <div
        className="media App-TopNav-Home w-media-topnav"
        onClick={e => props.changeState({ active: HOME })}
      >
        <i className="fab fa-react fa-lg align-self-center" />
        <div className="media-body">
          <h5 className="font-weight-bold m-0 p-0 pl-2">John Desjardins</h5>
        </div>
      </div>
      <div className="App-TopNav-Right d-flex flex-row-reverse" />
    </nav>
  );
}
