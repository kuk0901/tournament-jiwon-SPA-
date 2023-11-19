import { Component } from "../core/core.js";

export default class NotFound extends Component {
  render() {
    this.el.classList.add("container");

    this.el.innerHTML = /* html */ `
      <div class="not-found">
        <div class="the-loader"></div>
        <h1>Page Not Found.</h1>
      </div>
    `;
  }
}
