$(".section4 ul li")
  .on("mouseover", function () {
    $(this).addClass("on");
  })
  .on("mouseleave", function () {
    $(this).removeClass("on");
  });

/*
$("#sub2Btns a").eq(0).addClass("on");
$("section").eq(0).addClass("on");

$("#sub2Btns a").on("click", function () {
  if ($(this).hasClass("on")) {
    // $(this).removeClass("on");
    return false;
  } else {
    $("#sub2Btns a").removeClass("on");
    $(this).addClass("on");
  }

  if($('section').hasClass('on')){
   return false;
  } else{
    $('section').remove('on')
    $('section').addClass('on')
  }
});
*/

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
