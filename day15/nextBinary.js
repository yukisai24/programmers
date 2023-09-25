// https://school.programmers.co.kr/learn/courses/30/lessons/12911
function solution(n) {
  let binary = n.toString(2);
  let binaryLen = binary.length;
  let reverseBin = [];
  for (let i = binaryLen; i > 0; i--) {
    reverseBin.push(binary[i - 1]);
  }
  let element = reverseBin[0];

  if (element === "1") {
    const point = reverseBin.findIndex((e) => e === "0");
    return point !== -1
      ? n + 2 ** (point - 1)
      : n + 2 ** (reverseBin.length - 1);
  } else {
    let countZero = 0;
    while (reverseBin[0] === "0") {
      element = reverseBin.shift();
      countZero++;
    }
    let point = reverseBin.findIndex((e) => e === "0");
    if (point === -1) {
      point = reverseBin.length;
    }
    const remain = n % 2 ** (countZero + point - 1);
    return n + 2 ** (countZero + point - 1) - remain + remain / 2 ** countZero;
  }
}
