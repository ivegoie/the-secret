const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");
const bgMusic = document.querySelector("#music");

const MAX_IMAGES = 5;
let hasImageChanged = false;

let texts = [
  "Razmisli još jednom...",
  "Jesi li baš apsolutno uvjerena?",
  "Imaš li stvarno dovoljno razloga za to?",
  "Zar nemaš drugu opciju u vidu?",
  "Žao mi je, danas nemože biti po tvome.",
  "Moglo bi biti bolje da preskočiš tu opciju.",
  "Stvarno neželiš?",
  "Jesmo li potpuno sigurni u tu odluku?",
  "Moguće je da postoji bolja odluka...",
  "Ponovo razmotri svoje opcije...",
];

bgMusic.play();

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("mouseover", function () {
  if (!hasImageChanged) {
    changeImage("angry");
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

  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.2;

  yesButton.style.fontSize = `${newFontSize}px`;
});

function handleYesClick() {
  titleElement.innerHTML = "Jisss!! Vidimo se uskoro :3";
  buttonsContainer.classList.add("hidden");
  document.body.style.backgroundColor = "#FBF1F2";
  document.body.style.transition = "all 1s ease";
  changeImage("yes");
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

function changeImage(image) {
  catImg.src = `assets/img/milk_mocha_bear_${image}.gif`;
}
