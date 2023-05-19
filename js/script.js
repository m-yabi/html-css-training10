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
  spaceBetween: 20,
  speed: 3000,
  centeredSlides: true,
  slidesPerView: 1.5,
  autoplay: {
    delay: 0,
  },
  breakpoints: {
    // スライドの表示枚数：500px以上の場合
    750: {
      slidesPerView: 4,
      spaceBetween: 60,
    },
  },
});
