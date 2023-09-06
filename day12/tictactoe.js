// https://school.programmers.co.kr/learn/courses/30/lessons/160585
//
function solution(board) {
  var answer = -1;
  const breakBoard = [];
  board.map((e) => Array.from(e)).forEach((e) => breakBoard.push(...e));
  let o = breakBoard.filter((e) => e === "O").length;
  let x = breakBoard.filter((e) => e === "X").length;
  if (o < x || o > x + 1) return 0;
  return 1;
}
// o 가 x보다 갯수가 적은 경우
// o가 x보다 갯수가 하나 많은데 x가 세개 연속된 경우
// o가 x보다 두개 이상 많은 경우
// o가 완성된 라인이 두개 이상인 경우
