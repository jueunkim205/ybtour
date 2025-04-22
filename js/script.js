// 새로고침시 최상단으로 이동
// history.scrollRestoration = "manual";

// ************** header 메인메뉴 **************

/**
 * 인자로 전달된 문자열이 존재한다면 그 문자열이 위치한 index를 리턴합니다. 존재하지 않는다면 -1를 리턴합니다. -1을 통해서 해당 문자열이 존재하는 지 않하는지 판단할 수 있습니다.
 */

document.addEventListener("DOMContentLoaded", function () {
  const addr = window.location.pathname;
  const header = document.querySelector("header");

  function onWheelScroll(e) {
    const ht = document.documentElement.scrollTop;
    const delta = e.deltaY;

    if (addr.indexOf("sub") > 0) {
      header.classList.add("on");
      if (delta > 0 && ht > 0) {
        header.style.transform = "translateY(-200px)";
      } else {
        header.style.transform = "translateY(0)";
      }
    } else {
      if (delta > 0 && ht > 0) {
        header.style.transform = "translateY(-200px)";
        header.classList.remove("on");
      } else if (delta < 0) {
        header.style.transform = "translateY(0)";
        if (ht > 500) {
          header.classList.add("on");
        } else {
          header.classList.remove("on");
        }
      }
    }
  }

  window.addEventListener("wheel", onWheelScroll);

  // 현재 이벤트 등록 여부 체크용
  let wheelAttached = false;

  function updateWheelEvent() {
    if (window.innerWidth >= 1200 && !wheelAttached) {
      window.addEventListener("wheel", onWheelScroll);
      wheelAttached = true;
    } else if (window.innerWidth < 1200 && wheelAttached) {
      window.removeEventListener("wheel", onWheelScroll);
      wheelAttached = false;
    }
  }

  // 페이지 로드시 한 번 실행
  updateWheelEvent();

  // 창 크기 바뀔 때마다 체크
  window.addEventListener("resize", updateWheelEvent);
});

// ************** Side메뉴 **************

let sideBtn = $("header button");
sideBtn.on("click", function () {
  $("#sideMenu").toggleClass("on");

  if ($("#sideMenu").hasClass("on")) {
    $("header").addClass("on");
    $(this).addClass("on");
    $("html").css({ overflow: "hidden", height: "100%" });
  } else {
    $(this).removeClass("on");
    $("header").removeClass("on");
    $("html").css({ overflow: "auto", height: "auto" });
  }
});

//-----------------------------------------------

let sideMainMenu = $("#sideMenu .mainMenu");
let sideSubMenu = $("#sideMenu .subMenu");

sideSubMenu.each(function () {
  $(this).removeClass("on");
  $(this).css({ height: "0" });
});

sideMainMenu.on("click", function () {
  let ht = 0;
  let sub = $(this).find(".subMenu");

  if (sub.hasClass("on")) {
    sub.removeClass("on").css({ height: "0" });
  } else {
    sideSubMenu.each(function () {
      $(this).removeClass("on").css({ height: "0" });
    });

    sub.css({ height: "auto" });
    ht = sub.outerHeight();
    sub.css({ height: "0" }); // reset before animation
    sub.addClass("on");
    setTimeout(() => {
      sub.css({ height: ht + "px" });
    }, 10); // timeout to trigger transition
  }
});

// ************** 숫자 카운터 **************

const counters = document.querySelectorAll(".counter");

function startCounter(counter) {
  counter.textContent = "0";
  const targetNum = +counter.getAttribute("data-target");

  const updateCounter = () => {
    const count = +counter.textContent.replace(/,/g, "");
    const increment = targetNum / 100;
    const nextCount = Math.ceil(count + increment);
    const finalCount = nextCount > targetNum ? targetNum : nextCount;

    counter.textContent = finalCount.toLocaleString();

    if (count < targetNum) {
      requestAnimationFrame(updateCounter);
    }
  };

  updateCounter();
}

function resetCounters() {
  counters.forEach((counter) => startCounter(counter));
}

let wasAtTop = false;

window.addEventListener("scroll", () => {
  const isNearTop = window.scrollY <= 100;

  if (isNearTop && !wasAtTop) {
    resetCounters(); // 스크롤 위치가 100px 이하일 때 실행
  }

  wasAtTop = isNearTop;
});

// 페이지 로드 직후 scrollY가 100 이하일 경우 자동 실행
window.addEventListener("load", () => {
  if (window.scrollY <= 100) {
    resetCounters();
    wasAtTop = true;
  }
});

// ************** footer detail **************

let fArrow = $("footer .mOnly");
let detail = $("footer .down .con .detail");

fArrow.click(function () {
  fArrow.toggleClass("on");
  detail.toggleClass("on");
});

// ************** 반응형에서 AOS 다르게 주기 **************

AOS.init({
  // duration: 800,
  // delay: 500,
  // easing: "ease-in-out-sine",
  // offset: 400,
});

function updateAOS() {
  const textboxes = document.querySelectorAll(".section3 li .textbox");
  const pTag = document.querySelectorAll(".section3 li>p");

  textboxes.forEach((textbox, k) => {
    if (window.innerWidth < 1024) {
      textbox.setAttribute("data-aos-duration", "500");
      textbox.setAttribute("data-aos-delay", "0");
      textbox.setAttribute("data-aos-offset", "0");
      pTag[k].setAttribute("data-aos-duration", "500");
      pTag[k].setAttribute("data-aos-delay", "0");
      pTag[k].setAttribute("data-aos-offset", "0");
      // console.log(window.innerWidth);
    } else {
      textbox.setAttribute("data-aos-duration", "800");
      textbox.setAttribute("data-aos-delay", "500");
      textbox.setAttribute("data-aos-offset", "300");
      pTag[k].setAttribute("data-aos-duration", "800");
      pTag[k].setAttribute("data-aos-delay", "500");
      pTag[k].setAttribute("data-aos-offset", "300");
    }
  });

  AOS.refresh(); // 꼭 필요!
}

window.addEventListener("DOMContentLoaded", updateAOS);
window.addEventListener("resize", () => {
  // resize 성능 최적화를 위해 debounce 사용 (선택 사항)
  clearTimeout(window._aosResizeTimer);
  window._aosResizeTimer = setTimeout(updateAOS, 150);
});
