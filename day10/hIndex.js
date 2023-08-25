// https://school.programmers.co.kr/learn/courses/30/lessons/42747
// https://school.programmers.co.kr/learn/courses/30/lessons/138476
function solution(citations) {
  // citations.sort((a, b) => b - a);
  // const max = citations[0]
  const max = Math.max(...citations);
  for (let i = max; i > -1; i--) {
    //0까지 체크해야함
    if (citations.filter((e) => e >= i).length >= i) return i;
    else continue;
  }
}
// 1 2 3 4 5 6 7 8 8 8 8 8 8
// 1 1 1 1 1 1 2 3
console.log(solution([25, 8, 5, 3, 3]));
