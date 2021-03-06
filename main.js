import EN from "./lang/en";
import PL from "./lang/pl";

import pl_flag from "./gfx/icons/pl.svg";
import en_flag from "./gfx/icons/gb.svg";

let LANGUAGE = EN;
let ELEMENTS = [];

function parseLanguage() {
  LANGUAGE = localStorage.getItem("lang") == "pl" ? PL : EN;
  document.querySelector("#language").src = LANGUAGE == EN ? pl_flag : en_flag;
  if (ELEMENTS.length == 0) {
    document
      .querySelectorAll("h1,h2,h3,p,b,i,a,label")
      .forEach((e) => parseElement(e));
  } else {
    ELEMENTS.forEach((e) => parseElement(e.e, e.text));
  }
}

function parseElement(e, inner) {
  let text = inner != undefined ? inner : e.innerHTML;
  while (text.includes("{{") && text.includes("}}")) {
    if (inner == undefined) ELEMENTS.push({ e, text });
    const key = text.substring(text.indexOf("{{") + 2, text.indexOf("}}"));
    const value = key.includes(".")
      ? LANGUAGE[key.substr(0, key.indexOf("."))][
          key.substr(key.indexOf(".") + 1, key.length)
        ]
      : LANGUAGE[key];
    e.innerHTML = text =
      text.substring(0, text.indexOf("{{")) +
      value +
      text.substring(text.indexOf("}}") + 2, text.length);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  parseLanguage();
  setVH();
  setFramesHeights();
  initFrames();

  setInterval(update, 1000 / 60);

  if (window.innerWidth > 600) {
    window.addEventListener("resize", () => {
      setVH();
      setFramesHeights();
      initFrames();
    });
  }

  document.querySelector("#language").addEventListener("click", function () {
    localStorage.setItem("lang", LANGUAGE == EN ? "pl" : "en");
    LANGUAGE = LANGUAGE == EN ? PL : EN;
    parseLanguage();
  });
});

function update() {
  fadeAnimation();
  stepFrames();
}

function setVH() {
  const vh = window.innerHeight / 100;
  console.log("resizing", { vh });
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  console.log(document.documentElement.style.getPropertyValue("--vh"));
}

function setFramesHeights() {
  document
    .querySelectorAll(".display-image, .display-vertical")
    .forEach((e) => setHeights(e));
}

function setHeights(display) {
  const img = display.querySelector("img");
  const { width } = img;
  const ratio = img.naturalHeight / img.naturalWidth;
  if (img.complete) {
    display.style.height = `${Math.round(ratio * width)}px`;
  } else {
    img.addEventListener("load", () => {
      const { width } = img;
      const ratio = img.naturalHeight / img.naturalWidth;
      display.style.height = `${Math.round(ratio * width)}px`;
    });
  }
}

function initFrames() {
  document.querySelectorAll(".display-image").forEach((e) => {
    const reversed = e.classList.contains("--reversed");
    e.setAttribute("data-timeout", TIMEOUT_MAX);
    e.querySelectorAll("img").forEach((f, i) => {
      f.style.position = "absolute";
      f.style.left = `${(reversed ? i : -i) * f.width}px`;
    });
  });
  document.querySelectorAll(".display-vertical").forEach((e) => {
    const reversed = e.classList.contains("--reversed");
    e.setAttribute("data-timeout", TIMEOUT_MAX);
    e.querySelectorAll("img").forEach((f, i) => {
      f.complete
        ? setVerticalRatio(f, i, reversed)
        : f.addEventListener("load", () => setVerticalRatio(f, i, reversed));
    });
  });
}

function setVerticalRatio(img, i, reversed) {
  const ratio = img.naturalHeight / img.naturalWidth;
  const height = Math.round(img.width * ratio);
  img.style.position = "absolute";
  img.height = height;
  img.style.top = `${(reversed ? i : -i) * height}px`;
}

const TIMEOUT_MAX = 240;
const STEP_SPEED_DIVIDER = 60;

function makeStep(display, vertical = false) {
  const timeout = display.getAttribute("data-timeout") || TIMEOUT_MAX;

  const reversed = display.classList.contains("--reversed");

  const imgs = display.querySelectorAll("img");
  if (imgs.length > 2) {
    if (timeout <= 0) {
      for (let i = 0; i < imgs.length; i++) {
        const f = imgs[i];
        const x = vertical ? getTop(f) : getLeft(f);
        const step =
          (reversed ? -1 : 1) *
          (vertical
            ? f.height / STEP_SPEED_DIVIDER
            : f.width / STEP_SPEED_DIVIDER);

        if (
          (!reversed && x < 0 && x + step >= 0) ||
          (reversed && x > 0 && x + step <= 0)
        ) {
          display.setAttribute("data-timeout", TIMEOUT_MAX);

          const next = (vertical ? -f.height : -f.width) * (reversed ? -1 : 1);

          const prev = (vertical ? f.height : f.width) * (reversed ? -1 : 1);

          imgs[(i + 1) % imgs.length].style[
            vertical ? "top" : "left"
          ] = `${next}px`;

          f.style[vertical ? "top" : "left"] = `0px`;

          imgs[i > 0 ? (i - 1) % imgs.length : imgs.length - 1].style[
            vertical ? "top" : "left"
          ] = `${prev}px`;

          break;
        } else {
          f.style[vertical ? "top" : "left"] = `${x + step}px`;
        }
      }
    } else {
      display.setAttribute("data-timeout", timeout - 1);
    }
  }
}

function stepFrames() {
  document.querySelectorAll(".display-image").forEach((e) => makeStep(e));
  document
    .querySelectorAll(".display-vertical")
    .forEach((e) => makeStep(e, true));
}

function getLeft(element) {
  return element.style.left != undefined
    ? parseFloat(element.style.left.split("px")[0])
    : 0;
}

function getTop(element) {
  return element.style.top != undefined
    ? parseFloat(element.style.top.split("px")[0])
    : 0;
}

const fade = {
  titles: ["Front-End Developer", "Web Developer", "Fullstack Developer"],
  counter: 0,
  previous: 1,
  switched: false,
};

function fadeAnimation() {
  let b = document.querySelector("header h3 b");
  const { opacity } = window.getComputedStyle(b);
  const { titles, previous, switched } = fade;
  const delta = Math.abs(previous - opacity);
  fade.previous = opacity;

  if (opacity <= delta) {
    if (!switched) {
      fade.counter++;
      b.innerHTML = titles[fade.counter % titles.length];
      fade.switched = true;
    }
  } else if (opacity >= 1 - delta) fade.switched = false;
}
