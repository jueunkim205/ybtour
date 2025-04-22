// jQuery
document.querySelector('header').classList.add('on')

$(".section4 ul li")
  .on("mouseover", function () {
    $(this).addClass("on");
  })
  .on("mouseleave", function () {
    $(this).removeClass("on");
  });


let btns = $("#sub2Btns a");
let sections = $("section");

btns.eq(0).addClass("on");
sections.eq(0).addClass("on");

btns.each(function (index) {
  $(this).on("click", function () {
    btns.removeClass("on");
    sections.removeClass("on");

    $(this).addClass("on");
    sections.eq(index).addClass("on");
  });
});



AOS.init({
  duration: 1000,
  // delay: 500,
  easing: "ease-in-out-sine",
  offset: 100,
});


