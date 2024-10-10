import React, { Component } from 'react';
import './App.css';
import {Greet} from './component/Greet.js';
import Welcome from './component/Welcome.js';
import Hello from './component/Hello.js';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Greet/>
        <Welcome/>
        <Hello/>
      </div>
    );
  }
}

export default App;
