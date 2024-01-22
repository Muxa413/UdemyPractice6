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
  promoAdvImg = document.querySelectorAll('.promo__adv img'),
  promoBg = document.querySelector('.promo__bg'),
  promoGenre = promoBg.querySelector('.promo__genre'),
  moveList = document.querySelector('.promo__interactive-list');


promoAdvImg.forEach(item => {
  item.remove();
});

promoGenre.textContent = 'ДРАМА';

let newBG = 'bg.jpg';
promoBg.style.background = `url(../img/${newBG})`;

moveList.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
  moveList.innerHTML += `
    <li class="promo__interactive-item">${i + 1}) ${film}
      <div class="delete"></div>
    </li>
  `;
});

// # 1, 2, 5

const
  btn = document.querySelector('button'),
  input = document.querySelector('.adding__input');

const msBtn = (event) => {
  event.preventDefault();

  if (input.value != "" && input.value != null && input.value != NaN) {

    if (input.value.length > 21) {
      movieDB.movies.push(`${input.value.slice(0, 21)}...`)
    } else {
      movieDB.movies.push(input.value)
    };

  };

  moveList.innerHTML = '';

  movieDB.movies.sort();

  movieDB.movies.forEach((film, i) => {
    moveList.innerHTML += `
      <li class="promo__interactive-item">${i + 1}) ${film}
        <div class="delete"></div>
      </li>
    `;
  });
};

btn.addEventListener('click', msBtn);