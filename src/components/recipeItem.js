
import React from 'react';


export const RecipeItem = ({recipe}) => <h3 key={recipe.uri}>name: {recipe.label} calories: {recipe.calories}</h3>;