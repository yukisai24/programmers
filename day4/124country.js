//https://school.programmers.co.kr/learn/courses/30/lessons/12899#qna
function solution(n) {
  const stack = [];
  do {
    if (n % 3 === 0) {
      // 나머지가 0이면 나머지를 4로 바꿔주고 몫에서 -1.
      stack.push(4);
      n = Math.floor(n / 3) - 1;
    } else {
      // 나머지가 0이 아닌 경우 3진법으로 계산.
      stack.push(n % 3);
      n = Math.floor(n / 3);
    }
  } while (n > 0);
  // n이 0보다 클때까지 반복. (n !== 0)는 유효성 5번 시간초과.

  return stack.reverse().join("");
  //stack = [1, 4] 이므로 뒤집어서 문자열로 변환 => return 값은 '41'
}

solution(39);
// const p = "as df gh";
// console.log(p.replace("a", "df"));
//11 42
// 12 44
// 13 111
// 1 1 1
// 2 2 2
// 3 4 10

// 4 11 11
// 5 12 12
// 6 14 20
// 7 21 21
// 8 22 22
// 9 24 100
// 10 41 101
// 11 42 102
// 12 44 110
//  444444 1111110

// 13 111 111
// 14 112 112
// 15 114 120

// 00000
// 00001
// 00002
// 00004
// 00011
