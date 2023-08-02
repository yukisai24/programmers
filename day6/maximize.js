// https://school.programmers.co.kr/learn/courses/30/lessons/67257
// case
const sample = ["*-+", "*+-", "-*+", "-+*", "+*-", "+-*"];

function breakExpression(expression) {
  let list = [];
  let num = "";
  for (let i = 0; i < expression.length; i++) {
    if (
      expression[i] === "-" ||
      expression[i] === "+" ||
      expression[i] === "*"
    ) {
      list.push(num);
      list.push(expression[i]);
      num = "";
    } else {
      num = num + expression[i];
    }
  }
  list.push(num);
  return list;
}
function calOne(list, oper) {
  const _list = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i + 1] === oper) {
      let calNum = list[i];
      while (i + 1 < list.length && list[i + 1] === oper) {
        calNum =
          oper === "*"
            ? calNum * list[i + 2]
            : oper === "+"
            ? +calNum + +list[i + 2]
            : calNum - list[i + 2];
        i += 2;
      }
      _list.push(calNum);
    } else _list.push(list[i]);
  }
  return _list;
}

function solution(expression) {
  var answer = 0;
  let list = breakExpression(expression);
  for (let i = 0; i < sample.length; i++) {
    let priority = sample[i].split("");
    const first = calOne(list, priority[0]);
    const second = calOne(first, priority[1]);
    let final = calOne(second, priority[2])[0];
    // console.log(list);
    // console.log(priority);
    // console.log(first);
    // console.log(second);
    // console.log(final);
    if (final < 0) final = -final;
    if (answer < final) answer = final;
  }
  return answer;
}
const str = "100-200*300-500+20";
solution(str);
