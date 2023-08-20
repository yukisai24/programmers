// https://school.programmers.co.kr/learn/courses/30/lessons/176962
function solution(plans) {
  var answer = [];
  let stack = [];

  for (let i = 0; i < plans.length; i++) {
    //시를 분으로 환산
    let [h, m] = plans[i][1].split(":");
    plans[i][1] = h * 60 + +m;
  }

  plans.sort((a, b) => (a[1] < b[1] ? -1 : 1)); //시작 시간 낮은 것부터 sort

  for (let i = 0; i < plans.length; i++) {
    //연산
    let temp = plans[i];
    if (i == plans.length - 1) {
      answer.push(temp[0]); //마지막 과목이면 그냥 answer에 추가
    } else if (+temp[1] + +temp[2] > +plans[i + 1][1]) {
      //시작 시+소요시간이 다음 과목 시작 시보다 큰 경우
      stack.push([temp[0], +temp[1] + +temp[2] - +plans[i + 1][1]]); //stack에 저장 [과목명, 남은시간]
    } else {
      answer.push(temp[0]);
      let r = +plans[i + 1][1] - +temp[1] - +temp[2]; //나머지 시간

      while (stack.length > 0 && r >= stack[stack.length - 1][1]) {
        let temp = stack.pop();
        r -= +temp[1];
        answer.push(temp[0]);
      }
      if (stack.length > 0) stack[stack.length - 1][1] -= r; //잉여시간을 stack의 마지막 과목에서 뺌
    }
  }
  while (stack.length > 0) {
    //stack 마지막 순서대로 answer에 push
    answer.push(stack.pop()[0]);
  }
  return answer;
}
