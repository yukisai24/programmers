//https://school.programmers.co.kr/learn/courses/30/lessons/72411
function solution(orders, course) {
  var answer = [];
  const alphaList = Object.keys(whichAlpha(orders));
  course.forEach((num) => {
    answer = [...answer, ...maxOrder(orders, alphaList, num)];
  });

  return answer.sort();
}
function maxOrder(orders, alphaList, num) {
  let combinationList = combination(alphaList, num);
  let countList = [];
  let max = 1;
  let filter = [];
  combinationList.forEach((comb) => {
    let combCount =
      howManyExist(orders, comb) > 1 ? howManyExist(orders, comb) : 0;
    if (max < combCount) max = combCount;
    countList.push(combCount);
  });
  countList.forEach((e, index) => {
    if (e === max) filter.push(combinationList[index].sort().join(""));
  });
  return filter;
}
function combination(alphaList, num) {
  let list = [];
  if (num === 1) return alphaList;
  else {
    alphaList.forEach((alpha, index) => {
      let suffix = combination(alphaList.slice(index + 1), num - 1);
      for (let i = 0; i < suffix.length; i++) {
        list.push([alpha, ...suffix[i]]);
      }
    });
  }
  return list;
}
function isExist(order, sample) {
  return sample.every((e) => order.includes(e));
}

function howManyExist(orders, sample) {
  let count = 0;
  for (let i = 0; i < orders.length; i++) {
    isExist(orders[i], sample) && count++;
  }
  return count;
}

function whichAlpha(orders) {
  const allAlpha = {};
  for (let i = 0; i < orders.length; i++) {
    for (let j = 0; j < orders[i].length; j++) {
      let alpha = orders[i][j];
      allAlpha[alpha] = allAlpha[alpha] ? allAlpha[alpha] + 1 : 1;
    }
  }
  return allAlpha;
}

// console.log(
//   howManyExist(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], ["A", "C"])
// )
// console.log(["a", "c", "d", "b"]);
// console.log(["a", "c", "d", "b"].sort());
// console.log(
//   Object.keys(whichAlpha(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"]))
// );
// console.log(combination(["A", "B", "C", "F", "G", "D", "E", "H"], 3));
