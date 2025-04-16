// header 메인메뉴
let header = document.querySelector("header");

window.addEventListener("wheel", function (e) {
  let ht = document.documentElement.scrollTop;
  let delta = e.deltaY;
  // console.log(ht);
  // console.log(delta);
  // 아래 + , 위 -
  if (delta > 0) {
    header.style.transform = "translateY(-200px)"; // 휠 아래로 내리면 가리기
  } else if (delta < 0 && ht != 0) {
    header.style.transform = "translateY(0)"; // 휠 위로 올리면 보이기
    header.classList.add("on");
  } else {
    header.classList.remove("on");
  }
});

// 숫자 카운터
const counters = document.querySelectorAll(".counter");

counters.forEach(function (counter) {
  counter.textContent = "0";

  const targetNum = +counter.getAttribute("data-target");

  const updateCounter = () => {
    const count = +counter.textContent;

    const increment = targetNum / 100;
    const nextCount = Math.ceil(count + increment);

    counter.textContent = nextCount > targetNum ? targetNum : nextCount;

    if (count < targetNum) {
      requestAnimationFrame(updateCounter);
    }
  };

  updateCounter();
});
