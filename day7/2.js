// https://school.programmers.co.kr/learn/courses/30/lessons/76502
function solution(s) {
  var answer = 0;
  let arr = s.split(""); //str 을 배열로 관리
  for (let i = 0; i < s.length; i++) {
    let tempArr = [...arr]; //초기 배열 복사
    let [brokenArr, isChange] = breakArrange(tempArr); //붙어있는 괄호들 제거, 길이 변화 감지
    while (isChange) {
      //길이 변화가 있으면 한 번 더 break
      [brokenArr, isChange] = breakArrange(brokenArr);
    }
    brokenArr.length === 0 && answer++; //길이 변화가 없고 그 길이가 0인 경우 성공
    arr = reArrange(arr); //배열 회전
  }
  return answer;
}

function reArrange(arr) {
  //배열 회전 함수
  const item = arr.shift();
  arr.push(item);
  return arr;
}

function breakArrange(arr) {
  //배열 내에서 붙어있는 괄호들을 전부 제거하고 제거된 배열이랑 길이 변화 변수를 return
  let arrLen = arr.length;
  let tempArr = [];
  for (let j = 0; j < arr.length; j++) {
    if (
      (arr[j] === "(" && arr[j + 1] === ")") ||
      (arr[j] === "{" && arr[j + 1] === "}") ||
      (arr[j] === "[" && arr[j + 1] === "]")
    ) {
      j = j + 1;
    } else tempArr.push(arr[j]);
  }
  let isChange = arrLen !== tempArr.length;
  return [tempArr, isChange];
}
