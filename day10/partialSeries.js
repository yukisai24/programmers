// https://school.programmers.co.kr/learn/courses/30/lessons/131701
//4점
function solution(elements) {
  var answer = 0;
  const all = [];
  const len = elements.length;

  for (let i = 1; i < len; i++) {
    //수열 갯수
    let temp = 0;
    for (let j = 0; j < i; j++) {
      temp += elements[j];
    }
    for (let k = 0; k < len; k++) {
      all.push(temp);
      temp = temp + elements[(k + i) % len] - elements[k];
    }
  }
  const set = new Set(all);
  console.log(all);

  return [...set].length + 1;
}
