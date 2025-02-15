'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);
// loader//
window.addEventListener("load", () => {
  const loader = document.querySelector(".loaderr");
  loader.style.transform = "translateY(-100%)";
});



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});


function handleFormSubmit(event) {
  event.preventDefault();  // Prevent default form submission behavior

  // You can add your form processing logic here (e.g., sending data to a server)

  alert("Thank you for your message! We will get back to you soon.");

  // Redirect back to the homepage (index page)
  window.location.href = 'index.html';  // Make sure 'index.html' is the correct path to your homepage
}