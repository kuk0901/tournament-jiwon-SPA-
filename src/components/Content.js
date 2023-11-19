import { Component } from "../core/core.js";

export default class Content extends Component {
  render() {
    this.el.classList.add("content");
    this.el.innerHTML = /* html */ `
      <div class="img-content"></div>
      <div class="text">2023, 당신의 가장 눈부신 박지원을 찾아보세요.</div>
      <a href="#/Tournament8" class="btn btn-start">start</a>
    `;
  }
}
