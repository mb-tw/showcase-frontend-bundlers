import "./style.css";
import "./vite-style.css";
import viteLogo from "/vite.svg";

document.querySelector("#vite-logo").innerHTML = `
  <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
`;

import random from "./sassy-random-module.js";
const numberInput = document.querySelector("#nigel");
document.querySelector("#mike").addEventListener("click", popCoin);

function popCoin() {
  const randomList = random(numberInput.value);
  document.querySelector("#lez").textContent = randomList.join(" ");
}
