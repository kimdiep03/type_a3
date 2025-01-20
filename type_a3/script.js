const soundBtn = document.getElementById("soundBtn");
const langBtn = document.getElementById("langBtn");
const headlineImg = document.getElementById("headline");
const writingImg = document.getElementById("writing");
const scrollContainer = document.getElementById("scrollContainer");
const audio = document.getElementById("mySound");

soundBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    soundBtn.textContent = "Pause";
  } else {
    audio.pause();
    soundBtn.textContent = "Sound";
  }
});

langBtn.addEventListener("click", function () {
  const isVietnamese = writingImg.src.indexOf("vie.png") !== -1;
  if (isVietnamese) {
    writingImg.src = "assets/writing/eng.png";
    langBtn.textContent = "Vietnamese";
  } else {
    writingImg.src = "assets/writing/vie.png";
    langBtn.textContent = "English";
  }
});

window.addEventListener(
  "wheel",
  function (event) {
    event.preventDefault();
    event.stopPropagation();
    scrollContainer.scrollBy(event.deltaY, 0);
  },
  {
    passive: false,
    capture: true,
  }
);

let lastX = null,
  lastY = null;
window.addEventListener("mousemove", function (event) {
  if (
    lastX === null ||
    lastY === null ||
    Math.abs(event.clientX - lastX) > 100 ||
    Math.abs(event.clientY - lastY) > 100
  ) {
    const numHeadlineChoices = 7;
    headlineImg.src = `assets/headlines/${
      Math.floor(Math.random() * numHeadlineChoices) + 1
    }.png`;
    lastX = event.clientX;
    lastY = event.clientY;
  }
});
