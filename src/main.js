import random from "./sassy-random-module.js";
const numberInput = document.querySelector("#nigel");
document.querySelector("#mike").addEventListener("click", popCoin);

function popCoin() {
  const randomList = random(numberInput.value);
  document.querySelector("#lez").textContent = randomList.join(" ");
}
