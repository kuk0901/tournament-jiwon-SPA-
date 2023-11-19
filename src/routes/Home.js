import { Component } from "../core/core.js";
import Content from "../components/Content.js";

export default class Home extends Component {
  render() {
    const content = new Content().el;

    this.el.classList.add("container");
    this.el.append(content);
  }
}
