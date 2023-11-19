import { Component } from "../core/core.js";
import QuestionsEight from "../components/QuestionsEight.js";

export default class Tournament_8 extends Component {
  render() {
    const content = new QuestionsEight().el;

    this.el.classList.add("container");
    this.el.append(content);
  }
}
