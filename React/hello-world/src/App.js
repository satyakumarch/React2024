import React, { Component } from 'react';
import './App.css';
import {Greet} from './component/Greet.js';
import Welcome from './component/Welcome.js';
import Hello from './component/Hello.js';
import Navbar from './component/Navbar.js';
import Body from './component/Body.js';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Navbar/>
        <Body/>
        <Greet/>
        <Welcome/>
        <Hello/>
        
      </div>
    );
  }
}

export default App;
