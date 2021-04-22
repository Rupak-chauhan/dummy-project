import React, { Component } from 'react';
import { connect} from 'react-redux';
import { Media } from 'reactstrap';

class ContaintComponent extends Component {
    constructor(props){
        super(props);
    }
  render() {
        let dates= [];
    
        dates.push(this.props.Date);
       
        var datesList = dates.map((d) =>{
          console.log('hello');
                      let hour=d.getHours();
                      let min = d.getMinutes();
                      let sec = d.getSeconds()
                        return (<li> You clicked at {hour}: {min} :{sec} </li>   );
                      })
    return (
      <div className="container">
        
      <div className="row">
        <Media list>
            {datesList}
        </Media>
      </div>
      </div>
    );
  }
}

export default ContaintComponent;
