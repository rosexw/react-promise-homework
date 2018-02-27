import React, { Component } from 'react';

import { config } from './config';
import './App.css';

import {getRecipe} from "./api";
import {RecipeItem} from "./components/recipeItem";

import Recipe from './Components/Recipe';
import ErrorMessage from './Components/error-message';

const APP_ID = config.APP_ID; // your app id here, provided to you when you sign up
const APP_KEY = config.APP_KEY; // your app key here, provided to you when you sign up

// this would be what I would make for the final URL
const BASE_ENDPOINT = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}`;
// an example API request with a cake query would be
// `${BASE_ENDPOINT}&q=cake`

class App extends Component {

  state = {
    isError: false,
    recipes: []
  };

  componentDidMount() {
    getRecipe('cake')
      .then(response => response.ok ? response.json() : {isError: true})
      .then(result => result.isError ? result : {recipes: result.hits.map(hit => hit.recipe)})
      .then(result => this.setState(result));
  }

  render() {
    return (
      <div className="App">
        {this.state.isError ? <h1>Error!</h1> : this.state.recipes.map(recipe => <RecipeItem recipe={recipe} />)}
      </div>
    );
  }
}

export default App;
