"use client";
import $ from "jquery";
// $(window).scroll(function () {
//   if ($(window).scrollTop() >= 100) {
//     $(".main-header").addClass("fixed-header");
//     $(".main-header .top-header").css("top", "-45px");
//   } else {
//     $(".main-header").removeClass("fixed-header");
//     $(".main-header .top-header").css("top", "0");
//   }
// });

// function floatIconMessage(e) {
//   $(window).scroll(function () {
//     var header = $(".main-header").height();
//     var topHeader = $(".top-header").height();
//     $(".floating_icon").css("top", topHeader + 110);
//     if ($(window).scrollTop() >= header) {
//       $(".floating_icon").css("top", topHeader + 110);
//     } else {
//       $(".floating_icon").css("top", topHeader + 153);
//     }
//   });
// }
function stickyCategories(e) {
  $(window).scroll(function () {
    var header = $(".mobile_header").height();
    var customPackSection = $(".custom_pack_section").height();
    var bothHeaders = header + customPackSection;
    if ($(window).scrollTop() >= bothHeaders) {
      $(".sticky_categories").addClass("sticky");
    } else {
      $(".sticky_categories").removeClass("sticky");
    }
  });
}

window.onload = () => {
  stickyCategories();
};
$(window).resize(function () {
  // floatIconMessage();
  stickyCategories();
});

$(window).scroll(function () {
  if ($(window).scrollTop() >= 100) {
    $(".mobile_header").addClass("fixed-header");
  } else {
    $(".mobile_header").removeClass("fixed-header");
  }
});
