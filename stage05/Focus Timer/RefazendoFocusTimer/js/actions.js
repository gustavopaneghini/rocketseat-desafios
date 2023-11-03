import * as el from "./elements.js";
import { states } from "./states.js";
import * as timer from "./timer.js";

export function changeColor(e) {
  e.target.classList.toggle("gray");
  e.target.classList.toggle("color");
}

export function playingMusicTree() {
  el.tree.play();
}

export function toggleRunning() {
  states.isRunning = document.documentElement.classList.toggle("running");
  timer.countdown();
  timer.updateDisplay(el.minutes.textContent, el.seconds.textContent);
}

export function togglePaused() {
  states.isPaused = !states.isPaused;
  states.isRunning = document.documentElement.classList.remove("running");
}

export function reset() {
  states.isRunning = false;
  document.documentElement.classList.remove("running");
  timer.updateDisplay();
}

export function configTimer() {
  el.minutes.setAttribute("contentEditable", true);
  timer.setTime();
  el.minutes.focus();
}

export function stop() {
  reset();
}

export function plus() {
  let minutes = Number(el.minutes.textContent) + 5;
  if (minutes > 60) {
    minutes = 60;
  }
  timer.updateDisplay(minutes);
}

export function minus() {
  let minutes = Number(el.minutes.textContent) - 5;
  if (minutes < 0) {
    minutes = 0;
  }
}
