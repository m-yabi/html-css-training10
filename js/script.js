$(function () {
  $(".openbtn1").click(function () {
    $(this).toggleClass("active");
    $("#header__menu").toggleClass("panelactive");
    $(".header__bg").toggleClass("is-active");
  });

  $(".header__menu__list a").click(function () {
    $(".openbtn1").removeClass("active");
    $("#header__menu").removeClass("panelactive");
    $(".header__bg").removeClass("is-active");
  });

  $(window).scroll(function () {
    $(".js-fadeIn").each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
});

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 60,
  speed: 3000,
  centeredSlidesBounds: true,
  autoplay: {
    delay: 0,
  },
});
