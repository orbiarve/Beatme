import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <h1> Hi, Oriana!</h1>
        <div className='col-md-12'>
            <input id='Task' className='form-control' placeholder='Name of Task'/>
        
        </div>


      </div>
    );
  }
}

export default Main;
