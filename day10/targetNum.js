// https://school.programmers.co.kr/learn/courses/30/lessons/43165
//1점
function solution(numbers, target) {
  if (numbers.length === 1) {
    if (numbers[0] === target || numbers[0] === -target) return 1;
    else return 0;
  }
  const last = numbers.pop();
  return (
    solution([...numbers], target + last) +
    solution([...numbers], target - last)
  );
}
