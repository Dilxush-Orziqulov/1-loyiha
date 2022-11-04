"use strict";

const nav = document.querySelector(".lang");
const navLang = document.querySelector(".lang-items");

nav.addEventListener("click", ()=>{
    navLang.classList.toogle("active")
})