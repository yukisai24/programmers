function solution(n) {
  var answer = 0;
  for (let i = 1; i <= 2 * n; i++) {
    //2n = k*(k+2j+1)
    let r = (2 * n) % i;
    if (r === 0) {
      let q = (2 * n) / i;
      q - i > 0 && (q - i) % 2 === 1 && answer++;
    }
  }
  return answer;
}
