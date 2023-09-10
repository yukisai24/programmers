// https://school.programmers.co.kr/learn/courses/30/lessons/42891
function solution(food_times, k) {
  var answer = 0;
  const len = food_times.length;
  if (len > k) return k + 1;

  const count = {};
  food_times.forEach((e) => {
    count[e] = count[e] === undefined ? 1 : count[e] + 1;
  });
  const keys = Object.keys(keys).sort((a, b) => a - b);
  let temp = 0; //k와 비교할 값
  let trash = 0; //한 줄 탐색할 때 이미 다먹은 음식 수
  let index = 0; //줄 넘버
  while (temp < k) {
    trash += count[keys[index]];
    temp = temp + len - trash;
  }

  return answer;
}
