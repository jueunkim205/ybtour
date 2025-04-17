$(".section4 ul li")
  .on("mouseover", function () {
    $(this).addClass("on");
  })
  .on("mouseleave", function () {
    $(this).removeClass("on");
  });

$("#sub2Btns a").eq(0).addClass("on");

$("#sub2Btns a").on("click", function () {
  if ($(this).hasClass("on")) {
    $(this).removeClass("on");
  } else {
    $("#sub2Btns a").removeClass("on");
    $(this).addClass("on");
  }
});
