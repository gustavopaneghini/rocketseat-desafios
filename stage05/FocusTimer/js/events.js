import * as actions from "./actions.js";
import * as el from "./elements.js";

export function registerCards() {
  el.cards.addEventListener("click", (e) => {
    const audio = e.target.dataset.action;
    console.log(audio);
    if (typeof actions.changeColor !== "function") {
      return;
    }
    actions.changeColor(e);
    actions[audio]();
  });
}

export function registerCtrlTimer() {
  el.playerCtrl.addEventListener("click", (e) => {
    const timer = e.target.dataset.timer;
    if (typeof actions[timer] != "function") {
      return;
    }
    actions[timer]();
  });
}

export function registerSounds() {
  el.cards.addEventListener("click", (e) => {});
}
