// https://school.programmers.co.kr/learn/courses/30/lessons/12973
function solution(s) {
  let temp = Array.from(s);
  let sLen = temp.length;
  if (sLen % 2 !== 0) return 0;
  let _temp = [];
  for (let i = 0; i < sLen; i++) {
    _temp.flat(-1) !== temp[i] ? temp.push(temp[i]) : temp.pop();
  }

  return _temp.length > 0 ? 0 : 1;
}

const cart = ["apple", "banana", "pear"];
// let l = cart.at(-1);
// console.log(cart.at(-1)+);
console.log(cart[cart.length - 1]);
