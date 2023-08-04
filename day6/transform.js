//https://school.programmers.co.kr/learn/courses/30/lessons/154538
function solution(x, y, n) {
  var answer = 0;

  return answer;
}

function oneTime(x, y, n) {
  if (x === y) return 0;
  if (y === x + n || y === x * 2 || y === x * 3) return 1;
}
