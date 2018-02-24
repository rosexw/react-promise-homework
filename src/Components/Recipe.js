import React from 'react';

const Recipe = (props) => {
  return (
    <div>
      <a href={props.item.recipe.uri}>{props.item.recipe.label}</a>
      <img src={props.item.recipe.image} alt={props.item.recipe.label} />
    </div>
  );
}

export default Recipe;
