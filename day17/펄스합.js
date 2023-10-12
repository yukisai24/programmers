function solution(sequence) {
  var answer = 0;
  let sequenceTrans1 = sequence.map((e, index) => {
    return index % 2 ? e : -e;
  });
  let sequenceTrans2 = [];
  while (sequenceTrans1.length !== 0) {
    let ele = sequenceTrans1.shift();
    if (ele === 0) continue;
    (sequenceTrans2[sequenceTrans2.length - 1] > 0 && ele > 0) ||
    (sequenceTrans2[sequenceTrans2.length - 1] < 0 && ele < 0)
      ? (sequenceTrans2[sequenceTrans2.length - 1] += ele)
      : sequenceTrans2.push(ele);
  }
  for (let i = 1; i < sequenceTrans2.length; i = i + 2) {
    let temp = cal(i, sequenceTrans2);
    temp > answer && (answer = temp);
  }
  return answer;
}
// solution([2, 3, -6, 1, 3, -1, 2, 0, 0, 4, 0]);

function cal(len, seq) {
  let max = 0;
  for (let i = 0; i <= seq.length - len; i++) {
    let temp = 0;
    for (let j = 0; j < len; j++) {
      temp += seq[i + j];
    }
    Math.abs(temp) > max && (max = Math.abs(temp));
  }
  return max;
}

console.log(cal(3, [2, 3, -6, 1, 3, -1, 2, 0, 0, 4, 0]));

function maxAbsoluteSum(arr) {
  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
