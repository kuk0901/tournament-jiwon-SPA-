import { Store } from "../core/core.js";
import { Data } from "./imageData.js";

const store = new Store({
  question: randomIndex(),
  question4: [],
  question2: [],
  result: [],
  removeIndex: []
});

export default store;

// 인덱스 번호를 랜덤으로 뽑는 함수

export function randomIndex(dataIndex = Data.length) {
  let randomIndexArray = [];
  for (let i = 0; i < dataIndex; i++) {
    let randomNum = Math.floor(Math.random() * dataIndex);
    if (randomIndexArray.indexOf(randomNum) === -1) {
      randomIndexArray.push(randomNum);
    } else {
      i--;
    }
  }
  return randomIndexArray;
}
