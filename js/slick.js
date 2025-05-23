$(function () {
  $(".e-n-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    cssEase: "linear",
    prevArrow: ".e-n-reviews-list-left",
    nextArrow: ".e-n-reviews-list-right",
  });
});
$(function () {
  $(".e-n-contact-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    cssEase: "linear",
    prevArrow: ".e-n-contact-list-left",
    nextArrow: ".e-n-contact-list-right",
  });
});
