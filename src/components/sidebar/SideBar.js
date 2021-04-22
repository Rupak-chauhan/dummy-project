import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderComponent from '../header/Header';
import FooterComponent from '../footer/Footer';
import ContaintComponent from '../containt/Containt';
import './sidebar.css';


class SideBarComponent extends Component {
  constructor(props){
    super(props);
  }
  
render() {
    
    return (
        <div>
            <div className="sidebar">
            <a href="/" className="brand"><img height = "90px"src={require('../header/logo.png') } alt="logo"/>
            
            <hr/></a>

            <div className="butt">
                <button onClick= {this.props.clickingNow}>Click Here</button>
            </div>
</div>

<div class="content">
    <HeaderComponent Date={this.props.Date}/>
    {this.props.isClicked ? <ContaintComponent Date={this.props.Date} /> :null}
    <FooterComponent  clickCount={this.props.clickCount}/>
    
</div>
        </div>
        
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    isClicked:state.isClicked,
    Date:state.Date,
    clickCount:state.clickCount
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    clickingNow: () => dispatch({ type:'click'})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBarComponent);