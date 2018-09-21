import React, { Component } from 'react';
import Tabbar from "./movie-island/Tabbar"
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { selectedType: "now_showing" }
  }

  onTabChange = event => {
    var selectedType = event.target.getAttribute("data-type")
    this.setState({ selectedType })
  }

  render() {
    const { selectedType } = this.state,
      isNowShowingSelected = selectedType === "now_showing",
      isTopRatedSelected = selectedType === "top_rated"
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Movie</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">Click on the Following Tabs</p>
        <div>
          <span data-type="now_showing" onClick={this.onTabChange} className={`tab ${isNowShowingSelected ? "selected" : ""}`}>Now Showing</span>
          <span data-type="top_rated" onClick={this.onTabChange} className={`tab ${isTopRatedSelected ? "selected" : ""}`}>Top Rated</span>
        </div>
        <Tabbar></Tabbar>
      </div>
    );
  }
}

export default App;
