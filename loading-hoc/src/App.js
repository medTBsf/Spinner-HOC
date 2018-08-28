import React, { Component } from "react";
import "./App.css";
import MoviesInf from "./components/MoviesList";
import Movies from "./components/Movies";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }
  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 1500);
  }
  render() {
    return (
      <div className="App">
        <Movies movies={MoviesInf} isLoading={this.state.isLoading} />
      </div>
    );
  }
}

export default App;
