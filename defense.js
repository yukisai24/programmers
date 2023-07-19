function solution(n, k, enemy) {
  const enemyLen = enemy.length; //총 enemy wave
  if (k >= enemyLen) return enemyLen; //enemy wave 보다 무적권이 많은 경우 길이 return
  let killedEnemy = 0;
  const kValue = enemy.slice(0, k); //앞에서부터 k개 뽑기
  for (let i = 0; i < enemyLen - k; i++) {
    //k개 뽑은거에서 젤 작은 거랑 k+1 wave랑 비교
    let minK = Math.min(...kValue);

    if (enemy[i + k] > minK) {
      kValue[kValue.indexOf(minK)] = enemy[i + k];
      killedEnemy += minK;
    } else {
      killedEnemy += enemy[i + k];
    }
    if (killedEnemy > n) return i + k;
  }
  return enemyLen;
}

const arr = [
  4, 2, 4, 5, 3, 3, 1, 10, 2, 5, 4, 6, 6, 5, 4, 7, 10, 40, 2, 34, 32, 14, 23, 6,
];

console.log(arr.slice(0, 0));
