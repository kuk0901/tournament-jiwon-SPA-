import { Component } from "../core/core.js";
import { Data } from "../store/imageData.js";
import questionStore from "../store/question.js";

export default class QuestionLast extends Component {
  constructor() {
    super();
    questionStore.subscribe("question2", () => {
      this.render();
    });
  }
  render() {
    if (questionStore.state.question2.length == 0) {
      questionStore.state.result = questionStore.state.removeIndex;
      questionStore.state.removeIndex = [];
      location.hash = "#/result";
      return;
    }

    this.el.innerHTML = /* html */ `
      <div class="section"></div>
    `;

    const sectionEl = this.el.querySelector(".section");
    const index = questionStore.state.question2;
    let indexX = 0;
    let indexY = 0;

    sectionEl.innerHTML = /* html */ `
      <div class="title">결승</div>
      <div class="progress">
        <div class="value"></div>
      </div>
      <div class="section-content">
        <div class="contents container-a">
          <div class="first" style="background-image: url('${
            Data[index[0]].src
          }')"></div>
          <div class="sub-title">${Data[index[0]].title}</div>
        </div>
        <div class="contents container-b">
          <div class="second" style="background-image: url('${
            Data[index.at(-1)].src
          }')"></div>
          <div class="sub-title">${Data[index.at(-1)].title}</div>
        </div>
      </div>
    `;

    const containerAEl = this.el.querySelector(".container-a");
    const containerBEl = this.el.querySelector(".container-b");
    const progressValueEl = this.el.querySelector(".progress .value");

    const currentNumber = questionStore.state.removeIndex.length;

    progressValueEl.style.width = (currentNumber + 1) * 100 + "%";

    containerAEl.addEventListener("click", () => {
      containerAEl.classList.add("index");
      if (containerAEl.classList.contains("index")) {
        indexX = index.shift();
        indexY = index.pop();
        questionStore.state.removeIndex.push(indexX);
        questionStore.state.question2 = index;
      }
      containerAEl.classList.remove("index");
    });
    containerBEl.addEventListener("click", () => {
      containerBEl.classList.add("index");
      if (containerBEl.classList.contains("index")) {
        indexX = index.shift();
        indexY = index.pop();
        questionStore.state.removeIndex.push(indexY);
        questionStore.state.question2 = index;
      }
      containerBEl.classList.remove("index");
    });
  }
}
