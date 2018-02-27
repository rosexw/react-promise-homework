const APP_ID = 'e7e216b0';
const APP_KEY = '0b5ad1a1dcce889c9ea6a9df1e16a318';

const BASE_ENDPOINT = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}`;


export const getRecipe = recipeQuery => fetch(`${BASE_ENDPOINT}&q=${recipeQuery}`);