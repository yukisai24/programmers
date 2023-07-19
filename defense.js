function solution(n, k, enemy) {
  var answer = 0;
  const enemySum = [];
  const kValue = [];
  let tempSum = 0;
  enemy.forEach((e) => {
    tempSum += e;
    enemySum.push(tempSum);
  });
  let notUsingK = enemySum.findIndex((e) => e < n);
  //무적권 안쓰고 최대 갈 수 있는 스테이지
  //그 때까지 제일 큰 수 부터 작은 수 까지 k개 나열
  //제일 큰 수 뽑고 최대 갈 수 있는 스테이지에서 한칸ㄴㅇㄹㄴㅇㄹ
  return enemySum;
}

console.log(solution(7, 3, [4, 2, 4, 5, 3, 3, 1]));
