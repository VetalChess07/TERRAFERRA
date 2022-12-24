
let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup');

// console.log(body);




openPopupButtons.forEach((button) => { // Перебираем все кнопки
button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
   e.preventDefault(); // Предотвращаем дефолтное поведение браузера
   popupBg.classList.add('active'); // Добавляем класс 'active' для фона
   popup.classList.add('active'); // И для самого окна
   // body.classList.add('active')
})
});

closePopupButton.addEventListener('click', () => { // Вешаем обработчик на крестик
popupBg.classList.remove('active'); // Убираем активный класс с фона
popup.classList.remove('active'); // И с окна

});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
if (e.target === popupBg) { // Если цель клика - фот, то:
   popupBg.classList.remove('active'); // Убираем активный класс с фона
   popup.classList.remove('active'); // И с окна
  
}
});

const inputs = document.querySelectorAll(".input");
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (Array.from(inputs).every((v) => v.value) == true) {
      document.querySelector(".form__button").classList.add("_active");
    } else {
      document.querySelector(".form__button").classList.remove("_active");
    }
  });
});