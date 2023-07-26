function solution(n) {
  var answer = "";
  let m = n.toString(3);
  console.log(m.replace("2", "4").replace("1", "2").replace("0", "1"));
  m.replace("1", "2");
  m.replace("0", "1");
  console.log(m);
  return answer;
}
solution(10);
const p = "as df gh";
console.log(p.replace("a", "df"));
//11 42
// 12 44
// 13 111
