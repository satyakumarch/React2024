
// 5. Create an application for any kind of variable using React that
//  explores the React lifecycle methods at different stages.
//  The application should display the lifecycle methods in the console
//  at each stage of the component lifecycle.

import React, { Component } from "react";
// import "./Lifecycle.css";
class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    console.log("Constructor: Component is being created");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps: Syncing props with state if needed");
    return null; // No state update
  }

  componentDidMount() {
    console.log("componentDidMount: Component has been mounted");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate: Should the component update?");
    return true; // Allow updates
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate: Capturing pre-update information");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate: Component has been updated");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Component is being unmounted");
  }

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    console.log("Render: Rendering the component");
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>React Lifecycle Demo</h1>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.handleIncrement}>Increment Counter</button>
      </div>
    );
  }
}

export default LifecycleDemo;
