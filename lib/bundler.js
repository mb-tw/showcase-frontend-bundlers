import { readFileSync, writeFileSync } from "fs";

function getJsBundle() {
  let js = "";
  js += readFileSync("./src/sassy-random-module.js", "utf8");
  js += readFileSync("./src/main.js", "utf8");
  return js
    .replace(/\bexport\b.+?(?=$)/gm, "")
    .replace(/\bimport\b.+?(?=$)/gm, "")
    .replace(/(\r\n|\n|\r| {2})/gm, "");
}

function getCssBundle() {
  let css = "";
  css += readFileSync("./src/style.css", "utf8");
  return css.replace(/(\r\n|\n|\r| )/gm, "");
}

try {
  const jsBundle = getJsBundle();
  writeFileSync("./dist/main.js", jsBundle);

  const cssBundle = getCssBundle();
  writeFileSync("./dist/style.css", cssBundle);
} catch (err) {
  console.error(err);
}
