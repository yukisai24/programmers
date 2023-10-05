// https://school.programmers.co.kr/learn/courses/30/lessons/12913
//5점
function solution(land) {
  let landCopy = [];
  land.forEach((e) => landCopy.push(e));
  for (let i = 1; i < land.length; i++) {
    landCopy[i][0] =
      landCopy[i][0] +
      Math.max(landCopy[i - 1][1], landCopy[i - 1][2], landCopy[i - 1][3]);
    landCopy[i][1] =
      landCopy[i][1] +
      Math.max(landCopy[i - 1][0], landCopy[i - 1][2], landCopy[i - 1][3]);
    landCopy[i][2] =
      landCopy[i][2] +
      Math.max(landCopy[i - 1][0], landCopy[i - 1][1], landCopy[i - 1][3]);
    landCopy[i][3] =
      landCopy[i][3] +
      Math.max(landCopy[i - 1][0], landCopy[i - 1][1], landCopy[i - 1][2]);
  }

  return Math.max(...landCopy.at(-1));
}
