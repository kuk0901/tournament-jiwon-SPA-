import { Component } from "../core/core.js";
import QuestionLast from "../components/QuestionLast.js";

export default class TournamentLast extends Component {
  render() {
    const content = new QuestionLast().el;

    this.el.classList.add("container");
    this.el.append(content);
  }
}
