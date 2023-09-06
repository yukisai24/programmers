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
  let temp = len;
  let index = 0;
  let trash = 0;
  while (temp < k) {
    temp += len - count[keys[index]];
  }

  return answer;
}
