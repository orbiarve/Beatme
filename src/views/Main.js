import React, { Component } from 'react';
import { subscribeToTimer } from '../components/Socket';
import openSocket from 'socket.io-client';
import './Main.css';

const  socket = openSocket('http://192.168.1.78:8000');
class Main extends Component {
    constructor(props) {
        super(props);
        this.displayData = [];
        this.state = {
            message: 'no timestamp yet',
            name: 'type name',
            showdata : this.displayData,
            postVal : ""

        };
        subscribeToTimer((err, message) => this.setState({ 
          message 
        }, () => {
            console.log(message);
        }));
        this.sendPoint = this.sendPoint.bind(this);
        this.appendData = this.appendData.bind(this);
        this.nameInput = this.nameInput.bind(this);
      }
      componentDidMount() {
        socket.on('sendMessage', (msg) => {
            this.setState({
                postVal: msg
            }, () => { 
                console.log(msg)
                this.appendData()});
        });
      }
      appendData() {
        this.displayData.push(<div  id="display-data"><pre>{this.state.postVal}</pre></div>);
        this.setState({
           showdata : this.displayData,
           postVal : ""
        });
     }
      sendPoint() {
        const message = document.getElementById('Task').value;
        socket.emit('message', message);
        
      }
      nameInput (event) {
        this.setState({
          name: event.target.value
        })


      }

  render() {

    
    return (
      <div className="Main">
        <h1> Hi, </h1>
        <input onChange={this.nameInput} id='name' className='inputName' placeholder='your name'/>
        <div className='col-md-12'>
            <input id='Task' className='form-control' placeholder='Name of Task'/>
            <a className="btn" onClick={this.sendPoint} id="messageSubmit">Submit</a>
        </div>
        <p className="App-intro">
      This is the timer value: {this.state.message}
      </p>
      <div id="display-data-Container">
             {this.displayData}
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
                {this.state.name}
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
