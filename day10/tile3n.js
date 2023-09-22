// https://school.programmers.co.kr/learn/courses/30/lessons/12902
//14점
function solution(n) {
  if (n % 2 === 1) return 0;
  const len = n / 2;
  const mod = 1000000007;
  let ansArr = [1, 3, 11];
  for (let i = 3; i <= len + 1; i++) {
    ansArr.push((4 * ansArr[i - 1] - ansArr[i - 2] + mod) % mod); //mod 더해주는게 빡침
  }
  return ansArr[len];
}
console.log(solution(5000));
// sol = 3*n-2 2*n-4            2*n-6 ...2*1
// sol(n-2)=3*n-4               2*n-6
// sol = 4 sol(n-2)-sol(n-4)
