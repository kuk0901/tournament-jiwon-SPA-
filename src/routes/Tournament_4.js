import { Component } from "../core/core.js";
import QuestionFour from "../components/QuestionFour.js";

export default class Tournament_4 extends Component {
  render() {
    const content = new QuestionFour().el;

    this.el.classList.add("container");
    this.el.append(content);
  }
}
