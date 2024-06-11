// https://school.programmers.co.kr/learn/courses/30/lessons/12914
//7점
function solution(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  let temp = [1, 2];
  let i = 3;
  while (i <= n) {
    temp.push(+temp[i - 1] + +temp[i - 2]);
    i++;
  }
  let len = temp.length;
  return temp[len - 1] + temp[len - 2];
}
