"use strict";

// Adding smooth scrolling
const headerEls = ".header-list__el";
const footerEls = "#footerEl";

function smoothScroll(elements) {
  document.querySelectorAll(elements).forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      const id = this.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    });
  });
}

smoothScroll(headerEls);
smoothScroll(footerEls);
