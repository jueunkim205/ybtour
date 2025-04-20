// 새로고침시 최상단으로 이동
// history.scrollRestoration = "manual";


// header 메인메뉴
let header = document.querySelector("header");

window.addEventListener("wheel", function (e) {
  let ht = document.documentElement.scrollTop;
  let delta = e.deltaY;
  console.log(ht);
  // console.log(delta);
  // 아래 + , 위 -

  if (delta > 0 && ht != 0) { // 휠 아래로 내리면
    header.style.transform = "translateY(-200px)";
    header.classList.remove("on");
  } else if (delta < 0 && ht > 500) {  // 휠 위로 올리면 보이기
    header.style.transform = "translateY(0)";
    header.classList.add("on");
  } else if (delta < 0 && ht <= 500) { // 휠 위로 올리는데 최상단에 가까워지면
    header.style.transform = "translateY(0)";
    header.classList.remove("on");
  } else {
    header.classList.remove("on");
  }
});

// 숫자 카운터

/*
const counters = document.querySelectorAll(".counter");

counters.forEach(function (counter) {
  counter.textContent = "0";
  const targetNum = +counter.getAttribute("data-target");

  const updateCounter = () => {
    const count = +counter.textContent.replace(/,/g, ""); // 콤마제거 후 숫자로 변환
    const increment = targetNum / 100;
    const nextCount = Math.ceil(count + increment);
    const finalCount = nextCount > targetNum ? targetNum : nextCount;

    counter.textContent = finalCount.toLocaleString(); // 쉼표처리

    if (count < targetNum) {
      requestAnimationFrame(updateCounter);
    }
  };

  updateCounter();
});
*/

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
  counters.forEach(counter => startCounter(counter));
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



// -----------------------------------

AOS.init({
  duration: 1000,
  // delay: 500,
  easing: "ease-in-out-sine",
  offset: 500,
});


