const pElement = document.querySelector(".card__p");
const button = document.querySelector(".card__btn");
const h2Element = document.querySelector("h2");
const container = document.querySelector(".container");

function fetchData() {
  const apiURL = "https://api.adviceslip.com/advice";
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      const advice = data.slip.advice;
      const adviceId = data.slip.id;

      pElement.textContent = advice;

      h2Element.textContent = `ADVICE      #${adviceId}`;

      const fontSize = calculateFontSize(advice);
      pElement.style.fontSize = fontSize + "px";

      adjustContainerHeight();
    })
    .catch((error) => console.error(error));
}

function calculateFontSize(text) {
  const baseFontSize = 30;
  const maxLength = 100;

  return Math.max(baseFontSize - (text.length - maxLength) * 0.1, 16);
}

function adjustContainerHeight() {
  const maxHeight = 500;
  const currentHeight = container.offsetHeight;

  if (currentHeight > maxHeight) {
    container.style.height = maxHeight + "px";
  }
}

button.addEventListener("click", fetchData);

fetchData();
