import * as actions from "./actions.js";
import * as el from "./elements.js";

export function registerCards() {
  el.cards.addEventListener("click", (e) => {
    const action = e.target.dataset.action;
    if (typeof actions.changeColor !== "function") {
      return;
    }
    actions.changeColor(e);
    actions[action]();
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

export function audioControls() {
  el.cards.addEventListener("click", (e) => {
    const audio = e.target.dataset.audio;
    console.log(audio);
  });
}
