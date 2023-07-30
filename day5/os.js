function solution(priorities, location) {
  var answer = 0;
  const mappedArr = priorities.map((e, i) => ({ v: e, i: i }));
  for (let i = 0; i < mappedArr.length; ) {
    const temp = mappedArr.shift();
    if (mappedArr.some((e) => temp.v < e.v)) mappedArr.push(temp);
    else {
      if (temp.i === location) break;
      else answer++;
    }
    console.log(mappedArr, answer);
  }
  answer++;
  return answer;
}
solution([1, 1, 9, 1, 1, 1], 0);
