// https://school.programmers.co.kr/learn/courses/30/lessons/138476
//5점
function solution(k, tangerine) {
  var answer = 0;
  const sortedTangerine = {};
  tangerine.forEach((e) => {
    sortedTangerine[e] =
      sortedTangerine[e] !== undefined ? sortedTangerine[e] + 1 : 1;
  });
  const tangerArr = Object.values(sortedTangerine);
  tangerArr.sort((a, b) => b - a);
  let temp = 0;

  while (temp < k) {
    temp += tangerArr[answer];
    answer++;
  }
  return answer;
}
