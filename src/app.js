import React from "react";
import { connect } from "react-redux";

import Header from "./component/header/header";
import Footer from "./component/footer/footer";

import "./design/app.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      polarity: "neutral"
    };
  }

  handleButtonClickUp = e => {
    e.preventDefault();
    let polarity = this.state.polarity;
    let counter = this.state.counter + 1;
    // @928 saturday
    if (this.state.counter >= 0) polarity = "positive";
    this.setState({ counter, polarity });
  };

  handleButtonClickDown = e => {
    e.preventDefault();
    // this.setState({ counter: this.state.counter - 1 });
    // if (this.state.counter > 0) this.setState({ polarity: "positive" });
    let polarity = this.state.polarity;
    let counter = this.state.counter - 1;
    // @928 saturday
    if (this.state.counter <= 0) polarity = "negative";
    this.setState({ counter, polarity });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleButtonClickDown}>LESS?</button>
        <h4 className={this.state.polarity}>{this.state.counter}</h4>
        {/* className is JSX for class */}
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
