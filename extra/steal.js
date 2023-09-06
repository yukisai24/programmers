// https://school.programmers.co.kr/learn/courses/30/lessons/42897
//해설참조
function solution(money) {
  const len = money.length;
  const dp1 = new Array(len).fill(0); //첫번째 집을 털 경우
  const dp2 = new Array(len).fill(0); //안 털 경우

  dp1[0] = dp1[1] = money[0];
  for (let i = 2; i < len - 1; i++) {
    dp1[i] = Math.max(dp1[i - 2] + money[i], dp1[i - 1]);
  }

  dp2[0] = 0;
  dp2[1] = money[1];
  for (let i = 2; i < len; i++) {
    dp2[i] = Math.max(dp2[i - 2] + money[i], dp2[i - 1]);
  }

  return Math.max(dp1[len - 2], dp2[len - 1]);
}
//무조건 한 칸 혹은 두 칸만 띄워져있다
// ㅁ ㅌ ㅌ ㅁ ㅌ ㅁ ㅌ ㅌ ㅁ
// ㅁ ㅌ ㅁ ㅌ ㅁ ㅌ
// ㅁ ㅌ ㅌ ㅁ ㅌ ㅌ
// a0 a1 a2 a3 a4 a5 ... an-1 an
// solution([1, 2, 3, 1]);
// console.log("ans", chooseFirstMax([1, 2, 3, 4, 5, 6]));
// 3 5 2 10 8 1
////////////////////////////////////////////////////////////////
// function solution(money) {
//   const a = chooseFirstMax([...money]);
//   const shiftedMoney = shifting([...money]);
//   const b = chooseFirstMax(shiftedMoney);
//   const c = chooseFirstMax(shifting(shiftedMoney));
//   return Math.max(a, b, c);
// }

// function chooseFirstMax(money) {
//   switch (money.length) {
//     case 2:
//     case 3:
//       return money[money.length - 1];
//     case 4:
//       return money[1] + money[3];
//     default:
//       const last = money.pop();
//       const second = money.pop();
//       const a = chooseFirstMax([...money]);
//       if (last < second) return a;
//       else {
//         money.pop();
//         const b = chooseFirstMax(money);
//         return Math.max(a, b) + last;
//       }
//   }
// }

// function shifting(money) {
//   const num1 = money.shift();
//   money.push(num1);
//   return money;
// }
//////////////////////////////////////////////////////////
