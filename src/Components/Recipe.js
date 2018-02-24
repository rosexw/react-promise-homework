import React from 'react';

const Recipe = (props) => {
  return (
    <div>
      <img src={props.item.recipe.image} alt={props.item.recipe.label} />
      <p><a href={props.item.recipe.uri}>{props.item.recipe.label}</a></p>
    </div>
  );
}

export default Recipe;
