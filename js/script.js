let ht = document.documentElement.scrollTop;
let header = document.querySelector('header');

window.addEventListener('wheel', function (e) {
  let delta = e.deltaY;
  console.log(delta);
  // 아래 + , 위 -
  if (delta > 0) {
    header.style.transform = 'translateY(-200px)'
  } else {
    header.style.transform = 'translateY(0)'
  }
})


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