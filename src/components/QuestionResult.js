import { Component } from "../core/core.js";
import { Data } from "../store/imageData.js";
import questionStore from "../store/question.js";

export default class QuestionResult extends Component {
  render() {
    const index = questionStore.state.result;

    this.el.innerHTML = /* html */ `
      <div class="result-content">
        <div class="content">
          <div class="result-picture" style="background-image: url('${
            Data[index[0]].src
          }')"></div>
          <div class="sub-title">${Data[index[0]].title}</div>
          </div>
        </div>
      </div>
    `;
  }
}
