// https://school.programmers.co.kr/learn/courses/30/lessons/12945
// 6점
function solution(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let ansArr = Array(n + 1).fill(null);
  ansArr[0] = 0;
  ansArr[1] = 1;
  for (let i = 2; i < n + 1; i++) {
    ansArr[i] = (ansArr[i - 1] + ansArr[i - 2]) % 1234567;
  }

  return ansArr[n];
}
