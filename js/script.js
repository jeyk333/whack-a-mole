const box = document.querySelectorAll(".box");
const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelector("#time");
let score = document.querySelector("#score");

let result = 0;
let currentTime = timeLeft.textContent;

function randomBox() {
  box.forEach((b) => {
    b.classList.remove("mole");
  });
  let randomPosition = box[Math.floor(Math.random() * 9)];
  randomPosition.classList.add("mole");

  hitPosition = randomPosition.id;
}

box.forEach((b) => {
  b.addEventListener("mouseup", () => {
    if (b.id === hitPosition) {
      result = result + 1;
      score.textContent = result;
    }
  });
});

function moveMole() {
  let timerId = null;
  timerId = setInterval(randomBox, 1000);
}

moveMole();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    clearInterval(timerId);
    alert(`Game Over! Your score is ${result}`);
  }
}

let timerId = setInterval(countDown, 1000);
