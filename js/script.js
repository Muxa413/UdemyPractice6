/* 
Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов 
*/

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
  promoAdv = document.querySelector('.promo__adv'),
  promoGenre = document.querySelector('.promo__genre'),  
  promoBg = document.querySelector('.promo__bg');
  
// #1
promoAdv.remove();
// #2
promoGenre.textContent = 'ДРАМА';
// #3
let bg = 'bg.jpg';
promoBg.style.background = `url(../img/${bg})`;
// #4
