const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const milkMochaImage = document.querySelector(".milk-mocha-bear");
const bgMusic = document.querySelector("#music");
const openBtn = document.querySelector(".btn--open");
const questionDiv = document.querySelector("#question");
const openDiv = document.querySelector("#open");
const pulsingLoading = document.querySelector(".pulsing-3");

let activeTitle = "Valentinovo ❤️";
let inactiveTitle = "Hej, vrati se! 😕";

let hasImageChanged = false;

let angryGif = "https://i.ibb.co/pzyNhRh/milk-mocha-bear-angry.gif";
let yesGif = "https://i.ibb.co/WVrS7Lm/milk-mocha-bear-yes.gif";

let texts = [
  "Razmisli još jednom...",
  "Želiš li biti moje valentinovo?",
  "Imaš li stvarno dovoljno razloga za to?",
  "Zar nemaš drugu opciju u vidu?",
  "Žao mi je, danas nemože biti po tvome.",
  "Mislim da bi bilo bolje da preskočiš tu opciju.",
  "Moguće je da postoji bolja odluka...",
  "Ponovo razmotri svoje opcije...",
  "Moguće je da propuštaš nešto važno. Razmisli ponovno.",
  "Pokušaj slušati svoje unutarnje osjećaje...",
  "Slušaj svoje srce i razmisli o tome što zaista želiš.",
  "Moguće je da postoji nešto što nisi uzela u obzir.",
];

document.title = activeTitle;
window.addEventListener("blur", (e) => {
  document.title = inactiveTitle;
});
window.addEventListener("focus", (e) => {
  document.title = activeTitle;
});

questionDiv.classList.add("hidden");
openDiv.classList.add("hidden");

setTimeout(function () {
  openDiv.classList.remove("hidden");
  pulsingLoading.classList.add("hidden");
}, 2000);

openBtn.addEventListener("click", function () {
  bgMusic.play();
  questionDiv.classList.remove("hidden");
  openDiv.classList.add("hidden");
});

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("mouseover", hangleNoClick);

noButton.addEventListener("click", hangleNoClick);

function hangleNoClick() {
  if (!hasImageChanged) {
    changeImage(angryGif);
    hasImageChanged = true;
  }

  let newText = generateRandomText(texts);
  titleElement.textContent = newText;

  let maxX = window.innerWidth - noButton.clientWidth;
  let maxY = window.innerHeight - noButton.clientHeight;

  let newX = Math.floor(Math.random() * maxX);
  let newY = Math.floor(Math.random() * maxY);

  noButton.style.position = "absolute";
  noButton.style.left = newX + "px";
  noButton.style.top = newY + "px";

  console.log(newX);
  console.log(newY);

  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const height = parseFloat(computedStyle.getPropertyValue("height"));
  const width = parseFloat(computedStyle.getPropertyValue("width"));
  const newFontSize = fontSize * 1.05;
  const newHeightSize = height * 1.05;
  const newWidthSize = width * 1.05;

  yesButton.style.fontSize = `${newFontSize}px`;
  yesButton.style.height = `${newHeightSize}px`;
  yesButton.style.width = `${newWidthSize}px`;
}

function handleYesClick() {
  titleElement.innerHTML = "Jisss!! Vidimo se uskoro :3";
  buttonsContainer.classList.add("hidden");
  document.body.style.backgroundColor = "#FBF1F2";
  changeImage(yesGif);
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateRandomText(texts) {
  let randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
}

function changeImage(imageUrl) {
  milkMochaImage.src = `${imageUrl}`;
}
