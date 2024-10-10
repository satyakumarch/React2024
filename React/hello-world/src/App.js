import React, { Component } from 'react';
import './App.css';
import {Greet} from './component/Greet.js';


class App extends Component{
  render(){
    return (
      <div className="App">
        <Greet/>
      </div>
    );
  }
}

export default App;
