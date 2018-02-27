import React, { Component } from 'react';
import { config } from './config';
import './App.css';

import Recipe from './Components/Recipe';
import ErrorMessage from './Components/error-message';

const APP_ID = config.APP_ID; // your app id here, provided to you when you sign up
const APP_KEY = config.APP_KEY; // your app key here, provided to you when you sign up

// this would be what I would make for the final URL
const BASE_ENDPOINT = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}`;
// an example API request with a cake query would be
// `${BASE_ENDPOINT}&q=cake`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeList: [],
      errorMessage: []
    };
  }
  componentDidMount() {
    fetch(`${BASE_ENDPOINT}&q=cake`)
      .then(response => response.json())
      .then((result) => {
        console.log(result.hits);
        this.setState({recipeList: result.hits});
      })
      .catch( (error) => {
        console.error("error: ", error)
        this.setState({errorMessage:  [error.message]})
      })
  }
  render() {
    return (
      <div className="App">
        <h1 className="header">RECIPES</h1>
        <div className="recipe-list">
          {/* This should hopefully give you some direction, but ask your TAs for help if you're stuck! */}
          {this.state.recipeList.map((item, index) =>
            <Recipe key={index} item={item} />
          )}
          {this.state.errorMessage.map(error => <ErrorMessage message={error} />)}
        </div>
      </div>
    );
  }
}

export default App;
