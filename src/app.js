import React from "react";
import { connect } from "react-redux";

import Header from "./component/header/header";
import Footer from "./component/footer/footer";

import "./design/app.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleButtonClickUp = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  };
  handleButtonClickDown = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleButtonClickDown}>LESS?</button>
        <h4>{this.state.counter}</h4>
        <button onClick={this.handleButtonClickUp}>MORE!</button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
