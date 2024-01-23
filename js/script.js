/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

// Возьмите свой код из предыдущей практики
'use strict';

document.addEventListener('DOMContentLoaded', () => {

  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против..."
    ]
  };

  const
    adv = document.querySelectorAll('.promo__adv img'),
    promoBg = document.querySelector('.promo__bg'),
    promoGenre = promoBg.querySelector('.promo__genre'),
    moveList = document.querySelector('.promo__interactive-list');

  const deleteAdv = (arr) => {
    arr.forEach(item => {
      item.remove();
    });
  };
  const makeChanges = (genre, background) => {
    genre.textContent = 'ДРАМА';

    let newBG = 'bg.jpg';
    background.style.background = `url(../img/${newBG})`;
  };
  const sortArr = (arr) => {
    arr.sort();
  };
  
  function createMovieList(films, parent) {
    parent.innerHTML = '';

    sortArr(films);

    films.forEach((film, i) => {
      parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1}) ${film}
          <div class="delete"></div>
        </li>
      `;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);
        createMovieList(films, parent);
      })
    });    
  };

  const
    addForm = document.querySelector('form.add'),
    addInput = addForm.querySelector('.adding__input'),
    checkbox = addForm.querySelector('[type = "checkbox"]');

  const addFilm = (event) => {
    event.preventDefault();

    const
      newFilm = addInput.value,
      favorite = checkbox.checked;

    if (newFilm != "" && newFilm != null && newFilm != NaN) {

      if (favorite) {
        console.log('Добавляем любимый фильм')
      };

      if (newFilm.length > 21) {
        movieDB.movies.push(`${newFilm.slice(0, 21)}...`)
      } else {
        movieDB.movies.push(newFilm)
      };

      sortArr(movieDB.movies);
      createMovieList(movieDB.movies, moveList);
      event.target.reset();
    };
  };

  addForm.addEventListener('submit', addFilm);

  deleteAdv(adv);
  makeChanges(promoGenre, promoBg);  
  createMovieList(movieDB.movies, moveList);
});