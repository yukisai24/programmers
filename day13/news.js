// https://school.programmers.co.kr/learn/courses/30/lessons/17677
//6점
function solution(str1, str2) {
  var answer = 0;
  const setA = breakWord(str1);
  const setB = breakWord(str2);
  const setC = { ...setA, ...setB };
  let above = 0;
  let bottom = 0;
  for (let key of Object.keys(setC)) {
    const vA = setA[key] ?? 0;
    const vB = setB[key] ?? 0;
    if (vA > 0 && vB > 0) {
      above = above + Math.min(vA, vB);
      bottom = bottom + Math.max(vA, vB);
    } else {
      bottom = bottom + vA + vB;
    }
  }

  return bottom === 0 ? 65536 : Math.floor((65536 * above) / bottom);
}

const breakWord = (str) => {
  str = str.toUpperCase();
  let temp = [];
  for (let i = 0; i < str.length - 1; i++) {
    if (/^[a-z]{2}$/gi.test(str[i] + str[i + 1]))
      temp.push(str[i] + str[i + 1]);
  }
  let set = temp.reduce((accu, curr) => {
    accu[curr] = (accu[curr] || 0) + 1;
    return accu;
  }, {});
  return set;
};

solution("handshak34e", "shak23ge ha234nds");
