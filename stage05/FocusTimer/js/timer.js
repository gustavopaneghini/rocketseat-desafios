import { states } from "./states.js";
import * as el from "./elements.js";
import { reset } from "./actions.js";

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? states.minutes;
  seconds = seconds ?? states.seconds;

  el.minutes.textContent = String(minutes).padStart(2, 0);
  el.seconds.textContent = String(seconds).padStart(2, 0);
}

export function countdown() {
  if (!states.isRunning) {
    return;
  }

  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  seconds--;

  if (seconds < 0) {
    minutes--;
    seconds = 59;
  }

  if (minutes < 0) {
    reset();
    return;
  }

  setTimeout(() => countdown(), 1000);

  updateDisplay(minutes, seconds);
}

export function setTime() {
  el.minutes.addEventListener("focus", () => {
    el.minutes.textContent = "";
    el.minutes.onkeypress = (event) => /\d/.test(event.key);

    el.minutes.addEventListener("blur", (event) => {
      let time = event.currentTarget.textContent;
      time = time > 60 ? 60 : time;

      states.minutes = time;
      states.seconds = 0;

      updateDisplay();
      el.minutes.removeAttribute("contentEditable");
    });
  });
}
