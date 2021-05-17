let ClrButton = document.getElementById('colorBTTN');
let ClrMenu = document.getElementById('colormenu');
const BDYColor = document.getElementById('BodyColor');
const menuToggle = document.querySelector('.colormenuToggle')
const homeBttn = document.querySelector('.ColorHome');
const redBttn = document.querySelector('.ColorRed');
const blueBttn = document.querySelector('.ColorBlue');
const greenBttn = document.querySelector('.ColorGreen');
const yellowBttn = document.querySelector('.ColorYellow');
const purpleBttn = document.querySelector('.ColorPurple');


const ToggleMenu = function () {
    menuToggle.classList.toggle('colormenu');
}
ClrButton.addEventListener('click', ToggleMenu);

const turnHome = function () {
    BDYColor.classList.add('ColorHome');
    BDYColor.classList.remove('ColorRed');
    BDYColor.classList.remove('ColorBlue');
    BDYColor.classList.remove('ColorGreen');
    BDYColor.classList.remove('ColorYellow');
    BDYColor.classList.remove('ColorPurple');
}
homeBttn.addEventListener('click', turnHome);

const turnRed = function () {
    BDYColor.classList.remove('ColorHome');
    BDYColor.classList.add('ColorRed');
    BDYColor.classList.remove('ColorBlue');
    BDYColor.classList.remove('ColorGreen');
    BDYColor.classList.remove('ColorYellow');
    BDYColor.classList.remove('ColorPurple');
}
redBttn.addEventListener('click', turnRed);

const turnBlue = function () {
    BDYColor.classList.remove('ColorHome');
    BDYColor.classList.remove('ColorRed');
    BDYColor.classList.add('ColorBlue');
    BDYColor.classList.remove('ColorGreen');
    BDYColor.classList.remove('ColorYellow');
    BDYColor.classList.remove('ColorPurple');
}
blueBttn.addEventListener('click', turnBlue);

const turnGreen = function () {
    BDYColor.classList.remove('ColorHome');
    BDYColor.classList.remove('ColorRed');
    BDYColor.classList.remove('ColorBlue');
    BDYColor.classList.add('ColorGreen');
    BDYColor.classList.remove('ColorYellow');
    BDYColor.classList.remove('ColorPurple');
}
greenBttn.addEventListener('click', turnGreen);

const turnYellow = function () {
    BDYColor.classList.remove('ColorHome');
    BDYColor.classList.remove('ColorRed');
    BDYColor.classList.remove('ColorBlue');
    BDYColor.classList.remove('ColorGreen');
    BDYColor.classList.add('ColorYellow');
    BDYColor.classList.remove('ColorPurple');
}
yellowBttn.addEventListener('click', turnYellow);

const turnPurple = function () {
    BDYColor.classList.remove('ColorHome');
    BDYColor.classList.remove('ColorRed');
    BDYColor.classList.remove('ColorBlue');
    BDYColor.classList.remove('ColorGreen');
    BDYColor.classList.remove('ColorYellow');
    BDYColor.classList.add('ColorPurple');
}
purpleBttn.addEventListener('click', turnPurple);

/*
 <h1 class="goHome">Homepagina</h1>
    <h1 class="goRed">Rood</h1>
    <h1 class="goBlue">Blauw</h1>
    <h1 class="goGreen">Groen</h1>
    <h1 class="goYellow">Geel</h1>
    <h1 class="goPurple">Paars</h1>*/
