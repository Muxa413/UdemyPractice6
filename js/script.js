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
  // promoAdv = document.querySelector('.promo__adv'),
  promoAdvImg = document.querySelectorAll('.promo__adv img'),
  promoBg = document.querySelector('.promo__bg'),
  promoGenre = promoBg.querySelector('.promo__genre'),
  moveList = document.querySelector('.promo__interactive-list');
  
  
// #1

// promoAdv.remove();

promoAdvImg.forEach(item => {
  item.remove();
});

// #2
promoGenre.textContent = 'ДРАМА';

// #3
let newBG = 'bg.jpg';
promoBg.style.background = `url(../img/${newBG})`;

// #4, 5

moveList.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
  moveList.innerHTML += `
    <li class="promo__interactive-item">${i + 1}) ${film}
      <div class="delete"></div>
    </li>
  `;
});