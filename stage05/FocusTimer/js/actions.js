import * as el from "./elements.js";
import * as statesCTRL from "./states.js";
import * as timer from "./timer.js";

export function changeColor(e) {
  e.target.classList.toggle("gray");
  e.target.classList.toggle("color");
}

export function playingMusicTree() {
  statesCTRL.isPlaying.tree = !statesCTRL.isPlaying.tree;
  if (!statesCTRL.isPlaying.tree) {
    el.tree.pause();
  } else {
    el.tree.play();
  }
}

export function playingMusicRain() {
  statesCTRL.isPlaying.rain = !statesCTRL.isPlaying.rain;
  if (!statesCTRL.isPlaying.rain) {
    el.rain.pause();
  } else {
    el.rain.play();
  }
}

export function playingMusicShop() {
  statesCTRL.isPlaying.shop = !statesCTRL.isPlaying.shop;
  if (!statesCTRL.isPlaying.shop) {
    el.shop.pause();
  } else {
    el.shop.play();
  }
}

export function playingMusicFire() {
  statesCTRL.isPlaying.fire = !statesCTRL.isPlaying.fire;
  if (!statesCTRL.isPlaying.fire) {
    el.fire.pause();
  } else {
    el.fire.play();
  }
}

export function toggleRunning() {
  statesCTRL.states.isRunning =
    document.documentElement.classList.toggle("running");
  timer.countdown();
  timer.updateDisplay(el.minutes.textContent, el.seconds.textContent);
}

export function togglePaused() {
  statesCTRL.states.isPaused = !statesCTRL.states.isPaused;
  statesCTRL.states.isRunning =
    document.documentElement.classList.remove("running");
}

export function reset() {
  statesCTRL.states.isRunning = false;
  document.documentElement.classList.remove("running");
  timer.updateDisplay();
}

export function configTimer() {
  el.minutes.setAttribute("contentEditable", true);
  timer.setTime();
  el.minutes.focus();
}

export function stop() {
  statesCTRL.states.isRunning = false;
  document.documentElement.classList.remove("running");
  timer.updateDisplay();
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
