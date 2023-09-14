// https://school.programmers.co.kr/learn/courses/30/lessons/181187
//11점
function solution(r1, r2) {
  var answer = 0;
  for (let i = 1; i < r1; i++) {
    answer =
      answer +
      Math.floor((r2 ** 2 - i ** 2) ** (1 / 2)) -
      Math.floor((r1 ** 2 - i ** 2) ** (1 / 2));
    if (
      Math.floor((r1 ** 2 - i ** 2) ** (1 / 2)) ===
      (r1 ** 2 - i ** 2) ** (1 / 2)
    )
      answer++;
  }
  for (let i = r1; i < r2; i++) {
    answer = answer + Math.floor((r2 ** 2 - i ** 2) ** (1 / 2));
  }
  return 4 * answer + 4 * (r2 - r1 + 1);
}
