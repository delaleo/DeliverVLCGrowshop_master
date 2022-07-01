/*!
 * Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project


window.addEventListener("scroll", function(){

let element = document.getElementById("form-banc");
let screenSize = window.innerHeight;

if(element.getBoundingClientRect().top < screenSize) {
    element.classList.add('visible');
  } else {
    element.classList.remove('visible');
  }
});





