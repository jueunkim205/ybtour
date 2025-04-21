// 새로고침시 최상단으로 이동
// history.scrollRestoration = "manual";

// header 메인메뉴
let header = document.querySelector("header");

window.addEventListener("wheel", function (e) {
  let ht = document.documentElement.scrollTop;
  let delta = e.deltaY;
  // console.log(ht);
  // console.log(delta);
  // 아래 + , 위 -

  if (delta > 0 && ht != 0) {
    // 휠 아래로 내리면
    header.style.transform = "translateY(-200px)";
    header.classList.remove("on");
  } else if (delta < 0 && ht > 500) {
    // 휠 위로 올리면 보이기
    header.style.transform = "translateY(0)";
    header.classList.add("on");
  } else if (delta < 0 && ht <= 500) {
    // 휠 위로 올리는데 최상단에 가까워지면
    header.style.transform = "translateY(0)";
    header.classList.remove("on");
  } else {
    header.classList.remove("on");
  }
});

// 숫자 카운터

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


let fArrow = $("footer .mOnly");
let detail = $("footer .down .con .detail");

fArrow.click(function () {
  fArrow.toggleClass("on");
  detail.toggleClass("on");
});

// -----------------------------------

AOS.init({
  // duration: 800,
  // delay: 500,
  // easing: "ease-in-out-sine",
  // offset: 400,
});

// 반응형에서 다르게 주기

function updateAOS() {
  const textboxes = document.querySelectorAll(".section3 li .textbox");
  const pTag = document.querySelectorAll(".section3 li>p");

  textboxes.forEach((textbox, k) => {
    if (window.innerWidth < 768) {
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
