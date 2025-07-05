const circleProgress = document.querySelector(".circle-progress");
const numberOfBreaths = document.querySelector(".breath-input");
const start = document.querySelector(".start");
const instructions = document.querySelector(".instructions");
const breathsText = document.querySelector(".breaths-text");
let breathsLeft = 3;


numberOfBreaths.addEventListener("change", () => {
  breathsLeft = numberOfBreaths.value;
  breathsText.innerText = breathsLeft;
});

const growCircle = () => {
  circleProgress.classList.add("circle-grow");
  setTimeout(() => {
    circleProgress.classList.remove("circle-grow");
  }, 8000);
};

const breathTextUpdate = () => {
  breathsLeft--;
  breathsText.innerText = breathsLeft;
  instructions.innerText = "Hinga sügavalt sisse";
  setTimeout(() => {
    instructions.innerText = "Hoia hinge sees";
    setTimeout(() => {
      instructions.innerText = "Hinga rahulikult välja";
    }, 4000);
  }, 4000);
};

const breathingApp = () => {
  const breathingAnimtaion = setInterval(() => {
    if (breathsLeft === 0) {
      clearInterval(breathingAnimtaion);
      instructions.innerText = "Hingamisharjutus on lõppenud,\n vajuta 'Alusta', et uuesti teha";
      start.classList.remove("button-inactive");
      breathsLeft = numberOfBreaths.value;
      breathsText.innerText = breathsLeft;
      return;
    }
    growCircle();
    breathTextUpdate();
  }, 12000);
};

start.addEventListener("click", () => {
  start.classList.add("button-inactive");
  instructions.innerText = "3";
  setTimeout(() => {
  instructions.innerText = "2";
  }, 1000);
  setTimeout(() => {
    instructions.innerText = "1";
    setTimeout(() => {
      breathingApp();
      growCircle();
      breathTextUpdate();
    }, 1500);
  }, 2000);
});