import React, { Component } from 'react';
import './App.css';
import {Greet} from './component/Greet.js';
import Welcome from './component/Welcome.js';
import Hello from './component/Hello.js';
import Navbar from './component/Navbar.js';
import Body from './component/Body.js';
// import counterReducer from './content/component/counterReducer.js';
// import UseCounter from './component/UseCounter.js';
import CounterApp from './component/CounterApp.js';
import Table from './component/Table.js';
class App extends Component{
  render(){
    return (
      <div className="App">
        <Navbar/>
          <CounterApp/>
          {/* <UseCounter/> */}
        <Body/>
        <Greet/>
        <Table/>
        <Welcome/>
        <Hello/>
      </div>
    );
  }
}

export default App;
