// https://school.programmers.co.kr/learn/courses/30/lessons/12973
//3점
function solution(s) {
  let temp = Array.from(s);
  let sLen = temp.length;
  if (sLen % 2 !== 0) return 0;
  let _temp = [temp[0]];
  for (let i = 1; i < sLen; i++) {
    _temp[_temp.length - 1] !== temp[i] ? _temp.push(temp[i]) : _temp.pop();
  }

  return _temp.length > 0 ? 0 : 1;
}
