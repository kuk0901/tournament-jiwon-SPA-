import { Component } from "../core/core.js";

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: "header"
    });
  }
  render() {
    this.el.innerHTML = /* html */ `
    <button class="btn-reset">
      RESET
    </button>
    <div class="logo">
      TOURNAMENT-JIWON
    </div>
    <a href="https://www.instagram.com/xjiwonparkx/" target="_blank" class="instar">
      출처: <span>박지원 인스타그램(xjiwonparkx)</span>
    </a>
    `;

    const buttonEl = this.el.querySelector("button");
    buttonEl.addEventListener("click", () => {
      location.replace("/#/");
      location.reload();
    });
  }
}
