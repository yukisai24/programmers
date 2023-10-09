// https://school.programmers.co.kr/learn/courses/30/lessons/43163
function solution(begin, target, words) {
  var answer = 0;
  let theWord = begin;
  let [init, remain] = compareFn(begin, words);
  for (let str in init) {
    let _words = [...remain];
  }
  return answer;
}

function compareFn(str, words) {
  let filteredWords = [];
  let remainWords = [];
  words.forEach((e) => {
    let check = 0;
    for (let i = 0; i < str.length; i++) {
      e[i] !== str[i] && check++;
      check > 1 && remainWords.push(e);
    }
    check == 1 ? filteredWords.push(e) : remainWords.push(e);
  });
  return [filteredWords, remainWords];
}
