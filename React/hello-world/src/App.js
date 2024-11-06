import React, { Component } from 'react';
import './App.css';
import {Greet} from './component/Greet.js';
import Welcome from './component/Welcome.js';
import Hello from './component/Hello.js';
import Navbar from './component/Navbar.js';
import Body from './component/Body.js';

import CounterApp from './component/CounterApp.js';
import Table from './component/Table.js';
// import Form from './component/Form.js';
import Stateful from './component/Stateful.js';
import Stateless from './component/Stateless.js'
import App1 from './component/App1.js';


import Myform from './component/Myform.js';


class App extends Component{
  render(){
    return (
      <div className="App">
        <Navbar/>
         
          {/* <UseCounter/> */}
        <Body/>
        {/* <Form/> */}
        <App1/>
        <Greet/>
        
        <Welcome/>
        <Hello/>
        <CounterApp/>
        <Stateful/>
        <Stateless/>
        <Table/>
        <Myform/>
        
      </div>
    );
  }
}

export default App;
