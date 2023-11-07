const app = document.querySelector("#app");

const routes = {
  "/home": "/pages/home.html",
  "/universe": "/pages/universe.html",
  "/explorer": "/pages/explorer.html",
};

function route(event) {
  event = event || window.event;
  event.preventDefault();

  window.history.pushState({}, "", event.target.href);

  handle();

  window.onpopstate = () => handle();
}

function handle() {
  const { pathname } = window.location;
  const route = routes[pathname];
  fetch(route)
    .then((data) => data.text())
    .then((html) => {
      app.innerHTML = html;
    });
}
