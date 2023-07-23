function solution(n, k, enemy) {
  const enemyLen = enemy.length; //총 enemy wave
  if (k >= enemyLen) return enemyLen; //enemy wave 보다 무적권이 많은 경우 길이 return
  let killedEnemy = 0;
  const kValue = enemy.slice(0, k); //앞에서부터 k개 뽑기
  kValue.sort((a, b) => a - b);

  for (let i = 0; i < enemyLen - k; i++) {
    //k개 뽑은거에서 젤 작은 거랑 k+1 wave랑 비교
    let minK = kValue[0];
    if (enemy[i + k] > minK) {
      kValue.shift();
      kValue = insertInAscendingOrder(kValue, enemy[i + k]);
      killedEnemy += minK;
    } else {
      killedEnemy += enemy[i + k];
    }
    if (killedEnemy > n) return i + k;
  }
  return enemyLen;
}

function insertInAscendingOrder(arr, newItem) {
  let left = 0;
  let right = arr.length - 1;
  let insertIndex = arr.length; // 새로운 원소가 배열의 마지막에 삽입될 경우를 대비하여 배열의 길이로 초기화

  // 이진 탐색을 통해 삽입할 위치를 찾습니다.
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === newItem) {
      insertIndex = mid; // 중복된 값이 존재하는 경우 해당 위치에 삽입
      break;
    } else if (arr[mid] < newItem) {
      left = mid + 1;
    } else {
      right = mid - 1;
      insertIndex = mid; // 이전 위치를 저장해둡니다.
    }
  }

  // 새로운 원소를 찾은 위치에 삽입합니다.
  arr.splice(insertIndex, 0, newItem);

  return arr;
}

// 예시 사용:
let sortedArray = [1, 3, 5, 7, 9];
let newItem = 4;
sortedArray = insertInAscendingOrder(sortedArray, newItem);
console.log(sortedArray); // 출력: [1, 3, 4, 5, 7, 9]
const arr = [
  4, 2, 4, 5, 3, 3, 1, 10, 2, 5, 4, 6, 6, 5, 4, 7, 10, 40, 2, 34, 32, 14, 23, 6,
];
arr.sort((a, b) => a - b);
console.log(arr);
