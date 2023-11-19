import { Component } from "../core/core.js";
import QuestionResult from "../components/QuestionResult.js";

export default class Result extends Component {
  render() {
    const content = new QuestionResult().el;

    this.el.classList.add("container");
    this.el.append(content);
  }
}
