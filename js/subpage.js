$(".section4 ul li")
  .on("mouseover", function () {
    $(this).addClass("on");
  })
  .on("mouseleave", function () {
    $(this).removeClass("on");
  });
