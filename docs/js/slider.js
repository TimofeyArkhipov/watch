"use strict";let width=window.innerWidth;function adaptive(){width<=900?(document.querySelector(".img-group").classList.add("one-time"),$(".gallery").addClass("one-time"),$(".one-time").slick({dots:!1,infinite:!0,speed:300,slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0,nextArrow:".next",prevArrow:".prev"})):width>900&&$(".one-time").slick("unslick")}window.addEventListener("resize",adaptive),window.addEventListener("resize",(function(){adaptive()}));let $toggleButton=$(".toggle-button"),$menuWrap=$(".menu-wrap"),$normal_menu=$(".header__nav-menu");width<680&&$normal_menu.addClass("menu-wrap"),width>680&&($normal_menu.removeClass("menu-wrap"),$normal_menu.removeClass("menu-wrap")),$toggleButton.on("click",(function(){$(this).toggleClass("button-open"),$normal_menu.toggleClass("menu-show")})),$(".close-btn").on("click",(function(){$normal_menu.toggleClass("menu-show")}));