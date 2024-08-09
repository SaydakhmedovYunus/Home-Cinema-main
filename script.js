let openWindow_1 = document.querySelector('.menu_1');
openWindow_1.addEventListener('click', openFirstMenu);

function openFirstMenu() {
  console.log('Я работаю');
  let window_1 = document.querySelector('.window_1').style.display = 'block';
  let window_nav_1 = document.querySelector('.window_nav').style.display = 'flex';
}

let closeWindow_1 = document.querySelector('.close_1');
closeWindow_1.addEventListener('click', closeFirstMenu);
function closeFirstMenu() {
  console.log('Я работаю тоже');
  let window_1 = document.querySelector('.window_1').style.display = 'none';
}

let openWindow_2 = document.querySelector('.menu_2');
openWindow_2.addEventListener('click', openSecondMenu);

function openSecondMenu() {
  console.log('Да я тоже работаю');
  let window_2 = document.querySelector('.window_2').style.display = 'block';
  let window_nav_2 = document.querySelector('.window_nav2').style.display = 'flex';
}

let closeWindow_2 = document.querySelector('.close_2');
closeWindow_2.addEventListener('click', closeSecondMenu);
function closeSecondMenu() {
  console.log('Я закрылся');
  let window_2 = document.querySelector('.window_2').style.display = 'none';
}

let openWindow_3 = document.querySelector('.menu_3');
openWindow_3.addEventListener('click', openThirdMenu);

function openThirdMenu() {
  console.log('По годам');
  let window_3 = document.querySelector('.window_3').style.display = 'flex';
  let closed = document.querySelector('.closed').style.display = 'flex';
  let years_window = document.querySelector('.years_window').style.display = 'flex';
}
let closeWindow_3 = document.querySelector('.close_3');
closeWindow_3.addEventListener('click', closeThirdMenu);
function closeThirdMenu() {
  let window_3 = document.querySelector('.window_3').style.display = 'none';
}
