"use strict";

const toggleBnt = document.querySelector('.navbar__toggleBnt');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBnt.addEventListener('click',()=>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});
