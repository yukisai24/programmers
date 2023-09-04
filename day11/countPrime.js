// https://school.programmers.co.kr/learn/courses/30/lessons/92335
// 14점
function solution(n, k) {
  var answer = 0;
  const num = n.toString(k);
  let temp = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] !== "0") {
      temp.push(num[i]);
    } else {
      const p = +temp.join("");
      temp.length > 0 && isPrime(p) && answer++;
      temp = [];
    }
  }
  const p = +temp.join("");
  isPrime(p) && answer++;
  return answer;
}

function isPrime(n) {
  if (n === 1 || n === 0) return false;
  if (n === 2) return true;
  for (let i = 2; i < n ** (1 / 2) + 1; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
