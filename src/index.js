import './sass/main.scss';
import fetchMovie from './movieService';
import debounce from 'lodash.debounce';
import movieItem from './templates/movieItem.hbs';

const input = document.querySelector('.input');
const list = document.querySelector('.list');

input.addEventListener('input', debounce(getMovie, 500));

function getMovie() {
  const inputValue = input.value;
  fetchMovie(inputValue).then(data => createMarkup(data.results));
}

function createMarkup(array) {
  //   const list = document.createElement('ul');
  //   document.body.append(list);
  //   const markup = movieItem(array);
  //   document.querySelector('ul').insertAdjacentHTML('beforeend', markup);

  const markup = movieItem(array);
  list.insertAdjacentHTML('beforeend', markup);
}
