import React, { Component } from 'react';
import logo from './logo.svg';
import { config } from './config';
import './App.css';


const APP_ID = config.APP_ID; // your app id here, provided to you when you sign up
const APP_KEY = config.APP_KEY; // your app key here, provided to you when you sign up

// this would be what I would make for the final URL
const BASE_ENDPOINT = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}`;
// an example API request with a cake query would be
// `${BASE_ENDPOINT}&q=cake`

class App extends Component {
  componentDidMount() {
    fetch(`${BASE_ENDPOINT}&q=cake`)
      .then(response => response.json())
      .then((result) => console.log(result));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
