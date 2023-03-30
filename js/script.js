$(window).scroll(function () {
  var sc = $(window).scrollTop();
  if (sc > 100) {
    $("footer p.pagetop").fadeIn(500);
  } else {
    $("footer p.pagetop").fadeOut(500);
  }
});

$(".hmenu").click(function () {
  // $("nav").slideToggle("close");
  $(this).toggleClass("close");
  return false;
});

$("ul.tourlist").slick({
  infinite: true,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 767,
      settings: { slidesToShow: 1 },
    },
  ],
});

// スクロールして表示領域に入ったらclass付与
$(function () {
  $(".js-fadeUp").on("inview", function () {
    $(this).addClass("is-inview");
  });
});

// スクロールして表示領域に入ったらclass付与
$(function () {
  $(".js-fadedown").on("inview", function () {
    $(this).addClass("is-inview");
  });
});

$("ul.slider").slick({
  autoplay: true,
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 3,
  dots: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});

$(function () {
  $(".slider").slick({
    autoplay: true, // 自動再生ON
    dots: true, // ドットインジケーターON
    centerMode: true, // 両サイドに前後のスライド表示
    centerPadding: "0px", // 左右のスライドのpadding
    slidesToShow: 3,
    // 一度に表示するスライド数
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
