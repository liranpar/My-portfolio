"use strict"; // Start of use strict

$(() => {
  renderProjs();
  renderModals();
});

//send message by submit
$(".submit-btn").on("click", () => {
  onsubmit();
});

//Open and close side modal
$(".offcanvas-btn").on("click", () => {
  openCanvas();
});

//open the contact me modal
$(".contact-me").on("click", () => {
  onContactMe(this);
});

//close modals by clicking on overlay
$(".overlay").on("click", () => {
  $(".contact-modal").addClass("hidden");
  openCanvas();
});

$(".overlay-2").on("click", () => {
  if ($(".offcanvas-aside").hasClass("offcanvas-aside-open")) {
    $(".contact-modal").addClass("hidden");
    $(".overlay-2").addClass("hidden");
    openCanvas();
  } else {
    $(".contact-modal").addClass("hidden");
    $(".overlay-2").addClass("hidden");
  }
});

// Smooth scrolling using jQuery easing
$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
  if (
    location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top - 54,
        },
        1000,
        "easeInOutExpo"
      );
      return false;
    }
  }
});

// Closes responsive menu when a scroll trigger link is clicked
$(".js-scroll-trigger").click(function () {
  $(".navbar-collapse").collapse("hide");
});

// Activate scrollspy to add active class to navbar items on scroll
$("body").scrollspy({
  target: "#mainNav",
  offset: 54,
});

// Collapse the navbar when page is scrolled
$(window).scroll(function () {
  if ($("#mainNav").offset().top > 100) {
    $("#mainNav").addClass("navbar-shrink");
  } else {
    $("#mainNav").removeClass("navbar-shrink");
  }
});
