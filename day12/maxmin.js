// https://school.programmers.co.kr/learn/courses/30/lessons/12939
// 1점
function solution(s) {
  const arr = s.split(" ").map((e) => +e);
  return `${Math.min(...arr)} ${Math.max(...arr)}`;
}
