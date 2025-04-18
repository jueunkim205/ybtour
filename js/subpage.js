// jQuery

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



/* javascript
let btns = document.querySelectorAll("#sub2Btns a");
let sections = document.querySelectorAll("section");

btns[0].classList.add("on");
sections[0].classList.add("on");

btns.forEach((v, k) => {
  v.onclick = function () {
    console.log(k);

    btns.forEach((v) => {
      v.classList.remove("on");
    });

    sections.forEach((v) => {
      v.classList.remove("on");
    });

    v.classList.add("on");
    sections[k].classList.add("on");
  };
});
*/
