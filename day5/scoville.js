function solution(scoville, K) {
  var answer = 0;
  scoville = scoville.sort((a, b) => a - b);
  let scovilleMin = scoville[0];
  while (scovilleMin < K) {
    const newElement = scoville.shift() + 2 * scoville.shift();
    scoville = insertInAscendingOrder(
      scoville.sort((a, b) => a - b),
      newElement
    );
    scovilleMin = scoville[0];
    answer++;
    if (scoville.length <= 1 && scoville[0] < K) return -1;
  }
  return answer;
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

solution([1, 2, 3, 9, 10, 12], 7);
