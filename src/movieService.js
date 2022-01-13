export default function fetchMovie(query) {
  const KEY = '3a77cf2e264fc5181ae75199083953b5';
  const BASE_URL = 'https://api.themoviedb.org/3/search/movie?';

  return fetch(
    `${BASE_URL}api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${query}`,
  ).then(response => response.json());
}
