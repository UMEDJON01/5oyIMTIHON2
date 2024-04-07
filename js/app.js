const pElement = document.querySelector(".card__p");
const button = document.querySelector(".card__btn");
const h2Element = document.querySelector("h2");

function fetchData() {
  const apiURL = "https://api.adviceslip.com/advice";
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      pElement.textContent = data.slip.advice;
      h2Element.textContent = `ADVICE      #${data.slip.id}`;
    })
    .catch((error) => console.error(error));
}

button.addEventListener("click", fetchData);

fetchData();
