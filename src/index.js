import './sass/main.scss';
import fetchMovie from './movieService';
import debounce from 'lodash.debounce';
import movieItem from './templates/movieItem.hbs';

const input = document.querySelector('.input');
const list = document.querySelector('.list');
const loadBtn = document.querySelector('.load');
console.log(loadBtn);
let page = 1;
let inputValue = '';

input.addEventListener('input', debounce(getMovie, 500));
loadBtn.addEventListener('click', loadMore);

function getMovie() {
  inputValue = input.value;
  list.innerHTML = '';
  loadBtn.style.display = 'none';
  page = 1;

  if (inputValue.trim() === '') return;

  fetchMovie(inputValue)
    .then(data => {
      createMarkup(data.results);
      return data;
    })
    .then(data => {
      console.log(2222);
      if (!data.results.length) {
        console.log('1111');
        loadBtn.style.display = 'none';
        return;
      }
      loadBtn.style.display = 'inline-block';
    });
}

function createMarkup(array) {
  //   const list = document.createElement('ul');
  //   document.body.append(list);
  //   const markup = movieItem(array);
  //   document.querySelector('ul').insertAdjacentHTML('beforeend', markup);

  const markup = movieItem(array);
  list.insertAdjacentHTML('beforeend', markup);
}

function loadMore() {
  page += 1;
  fetchMovie(inputValue, page).then(data => createMarkup(data.results));
}
