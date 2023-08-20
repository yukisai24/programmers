// https://school.programmers.co.kr/learn/courses/30/lessons/42584
function solution(prices) {
  var answer = [];
  for (let i = 0; i < prices.length - 1; i++) {
    let temp = 1;
    let flag = i;
    while (prices[i] <= prices[flag + 1]) {
      flag < prices.length - 2 && temp++;
      flag++;
    }
    answer.push(temp);
  }
  answer.push(0);
  return answer;
}
