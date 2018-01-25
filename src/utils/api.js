const API_ID = 'ee8b9db4';
const APP_KEY = 'a90e3421ecb41c7ad3e0597a9cb615d8';

export function fetchRecipes (food = '') {
  food = food.trim()

  return fetch(`https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${APP_KEY}`)
    .then((res) => res.json())
    .then(({ hits }) => hits.map(({ recipe }) => recipe))
}
