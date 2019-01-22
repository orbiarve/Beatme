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
        <div className='col-md-3'></div>
        <div className='col-md-6 count'>
            <div className='col-md-12 '>
                <h2> Job Hunt</h2>
            </div>
            
            
            <div className="col-md-6 counter">
             <h1>100</h1>
            </div>
            <div className='col-md-6 tracker'>
                <div className='col-md-12 participant1'>
                Oriana
                </div>
                <div className='col-md-12 participant2'>
                CLaudio    
                </div>
                <div className='col-md-12 participant3'>
                Justin
                </div>
            </div>
            <div className='col-md-6'></div>
        
        </div>
      </div>
    );
  }
}

export default Main;
