import React from "react";

export default class AppNavDrawerOpen extends React.Component {
  handleChange = (event, callback) => {
    callback({
      list: this.props.config_list.filter(item =>
        item.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    });
  };

  render() {
    return (
      <div className="App-SideDrawer align-self-stretch text-light">
        {/* Header */}
        <nav class="App-SideDrawer-contentHeader navbar d-flex align-items-center justify-content-between">
          <small className="font-italic font-weight-bold m-0 p-0">
            Application Showcase
          </small>
          <span>
            <i class="SideDrawer-Control far fa-caret-square-left" />
          </span>
        </nav>
        {/* Body */}
        <div className="App-drawer-content">
          {this.props.list.map((n, index) => (
            <DrawerMediaItem
              key={index}
              id={n.id}
              icon={n.icon}
              title={n.title}
              desc={n.description}
              onClick={this.props.changeState}
              active={this.props.active === n.id}
            />
          ))}
        </div>
        {/* Footer */}
        <div className="App-drawer-search w-100 p-2">
          <div class="input-group input-group-sm">
            <div class="input-group-prepend">
              <span class="input-group-text app-drawer-input-prepend">
                <i class="fas fa-search" />
              </span>
            </div>
            <input
              type="text"
              className="form-control app-drawer-input"
              placeholder="Search"
              onChange={e => this.handleChange(e, this.props.changeState)}
            />
          </div>
        </div>
      </div>
    );
  }
}

function DrawerMediaItem(props) {
  return (
    <div
      class={`media App-TopNav-Home w-100 w-media-drawer ${
        props.active ? `active` : ``
      }`}
      onClick={e => props.onClick({ active: props.id })}
    >
      <div className="w-media-img d-flex justify-content-center align-self-center">
        <i className={`${props.icon} fa-fw`} />
      </div>
      <div class="media-body d-flex align-items-center align-self-center w-media-body">
        <small className="font-weight-bold m-0 p-0 pl-3 text-truncate">
          {props.title}
        </small>
      </div>
    </div>
  );
}
