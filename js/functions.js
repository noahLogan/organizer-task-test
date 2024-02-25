// - - - - -  Animación del Menú - - - - - 
// se selecciona la clase principal del menu, y se orde que al dar click se ejecute la función "animateBars"
document.querySelector(".bars__menu").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");
var container__menu = document.querySelector(".menu");

function animateBars(){
    //el evento toggle se aplica se aplica a la clase activeline__bars-menu
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");

    container__menu.classList.toggle("menu__active");
}
