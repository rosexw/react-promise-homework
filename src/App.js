import React, { Component } from 'react';
import {getRecipe} from "./api";
import {RecipeItem} from "./components/recipeItem";

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
