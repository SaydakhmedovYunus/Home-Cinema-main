let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");

  // Обработка выхода индекса за пределы диапазона
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}

  // Скрытие всех слайдов
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Удаление активного класса у всех точек
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Показ текущего слайда
  slides[slideIndex-1].style.display = "flex";

  // Добавление активного класса для текущей точки
  dots[slideIndex-1].className += " active";

  // Обновление подписи, если элемент существует

}
