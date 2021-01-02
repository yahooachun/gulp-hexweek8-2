"use strict";

$(function () {
  // Initialize daterangepicker
  $("#daterange").daterangepicker(); // Initialize Swiper

  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    slidesPerGroup: 1,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next"
    }
  });
});
$(".js-reserveControl").click(function (e) {
  e.preventDefault();
  $(".js-reserveTotal").toggleClass("d-none");
  $(".js-reserveIcon").toggleClass("rotate180");
});
//# sourceMappingURL=all.js.map
