import { registerCards, registerCtrlTimer } from "./events.js";

export function start() {
  registerCards();
  registerCtrlTimer();
}
