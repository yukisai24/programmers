function solution(numbers) {
  var answer = [];

  answer = numbers.map((e) => fn(e));
  return answer;
}

function fn(x) {
  let binary = x.toString(2);
  let binaryLen = binary.length;
  let reverseBin = [];
  for (let i = binaryLen; i > 0; i--) {
    reverseBin.push(binary[i - 1]);
  }
  let one = reverseBin.findIndex((e) => e == 0);
  return one === -1
    ? x - 2 ** (binaryLen - 1) + 2 ** binaryLen
    : one === 0
    ? x + 1
    : x - 2 ** (one - 1) + 2 ** one;
}
for (let i = 1; i < 40; i++) {
  console.log(i, i.toString(2), fn(i), fn(i).toString(2));
}

// 1 2
// 2 3
// 3 5 3+2 11 101
// 4 5
// 5 6
// 6 7
// 7 11 7+4
// 8 9
// 2^x-1
