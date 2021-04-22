import React, { Component } from 'react';
import './header.css';

class HeaderComponent extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <header className="site-header">
          <h1  className=" ml-4">Current Time: {this.props.Date.getHours()} : {this.props.Date.getMinutes()}: {this.props.Date.getSeconds()} </h1>
      </header>
    );
  }
}

export default HeaderComponent;