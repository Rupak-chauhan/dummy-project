import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideBarComponent from './components/sidebar/SideBar';

class App extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div >
        <SideBarComponent />
      </div>
    );
  }
}
export default App;
