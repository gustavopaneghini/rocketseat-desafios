import { GithubUser } from "./githubUsers.js";

GithubUser;
export class favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();
  }

  async add(username) {
    try {
      const userExists = this.entries.find((entry) => entry.login === username);
      if (userExists) {
        throw new Error("Usuário já cadastrado!");
      }
      const user = await GithubUser.search(username);
      if (user.login === undefined) {
        throw new Error("Usuário não encontrado!");
      }

      this.entries = [user, ...this.entries];
      this.update();
      this.save();
    } catch (error) {
      alert(error.message);
    }
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem("@github-favorites:")) || [];
  }

  save() {
    localStorage.setItem("@github-favorites:", JSON.stringify(this.entries));
  }

  delete(user) {
    this.entries = this.entries.filter((entry) => entry.login != user.login);
    this.update();
    this.save();
  }
}

export class favoritesView extends favorites {
  constructor(root) {
    super(root);

    this.tbody = this.root.querySelector("table tbody");

    this.update();
    this.onadd();
  }

  onadd() {
    const addButton = this.root.querySelector(".content button");
    addButton.onclick = () => {
      const { value } = this.root.querySelector(".content input");
      this.add(value);
    };
  }

  update() {
    this.removeAllTr();
    this.entries.forEach((user) => {
      const row = this.createRow();

      row.querySelector(
        ".user img"
      ).src = `https://github.com/${user.login}.png`;
      row.querySelector(".user span").textContent = user.name;
      row.querySelector(".user a").href = `https://github.com/${user.login}
      `;
      row.querySelector(".user p").textContent = user.login;
      row.querySelector(".followers").textContent = user.followers;
      row.querySelector(".repositories").textContent = user.public_repos;

      row.querySelector(".remove").onclick = () => {
        const isOk = confirm("Tem certeza que deseja remover esse usuário ?");
        if (isOk) {
          this.delete(user);
        }
      };

      this.tbody.append(row);
    });
  }

  createRow() {
    const tr = document.createElement("tr");

    tr.innerHTML = `
    <td class="user">
      <img src="https://github.com/diego3g.png" alt="">
      <a href="">
        <span>
          Diego Fernandes
        </span>
        <p>/diego3g</p>
      </a>
    </td>
    <td class="repositories">1234</td>
    <td class="followers">123</td>
    <td><button class="remove">Remover</button></td>
    `;

    return tr;
  }

  removeAllTr() {
    this.tbody.querySelectorAll("tr").forEach((tr) => tr.remove());
  }
}
