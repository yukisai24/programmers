function solution(word) {
  var answer = 0;
  answer=allWords(5).findIndex(e=> e===word)+1
  return answer;
}

const len1 = ["A", "E", "I", "O", "U"]; //5

function allWords(len) {
  if (len === 1) return len1;
  else {
    let temp = [];
    temp.push("A");
    allWords(len - 1).forEach((word) => temp.push("A" + word));
    temp.push("E");
    allWords(len - 1).forEach((word) => temp.push("E" + word));
    temp.push("I");
    allWords(len - 1).forEach((word) => temp.push("I" + word));
    temp.push("O");
    allWords(len - 1).forEach((word) => temp.push("O" + word));
    temp.push("U");
    allWords(len - 1).forEach((word) => temp.push("U" + word));
    return temp;
  }
}
