"use strict";function adaptive(){let e=window.innerWidth;e<900?(document.querySelector(".gallery").classList.add("one-time"),$(".one-time").slick({dots:!1,infinite:!0,speed:300,slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0,nextArrow:".next",prevArrow:".prev"})):e>=1371&&$(".one-time").slick("unslick")}window.addEventListener("resize",(function(){adaptive()}));