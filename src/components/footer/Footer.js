import React, { Component } from 'react';
import './footer.css';

class FooterComponent extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
    <footer className="site-footer ">
              <h1 className=" ml-4">You clicked {this.props.clickCount} times.</h1>
    </footer>   
    );
  }
}

export default FooterComponent;