import { Router } from "../router.js";

const routes = new Router();
routes.add("/", "/pages/home.html");
routes.add("/home", "/pages/home.html");
routes.add("/universe", "/pages/universe.html");
routes.add("/explorer", "/pages/explorer.html");

routes.handle();

window.onpopstate = () => routes.handle();
window.route = () => routes.route();
