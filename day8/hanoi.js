// https://school.programmers.co.kr/learn/courses/30/lessons/12946
function solution(n) {
  if (n === 1) return [[1, 3]];
  const temp = solution(n - 1);
  const bfa = [];
  const afa = [];
  temp.forEach((e) => {
    let [x, y] = e;
    let tempX = x;
    let tempY = y;

    if (x === 2) tempX = 3;
    else if (x === 3) tempX = 2;
    if (y === 2) tempY = 3;
    else if (y === 3) tempY = 2;
    bfa.push([tempX, tempY]);
    tempX = x;
    tempY = y;
    if (x === 1) tempX = 2;
    else if (x === 2) tempX = 1;
    if (y === 1) tempY = 2;
    else if (y === 2) tempY = 1;
    afa.push([tempX, tempY]);
  });

  return [...bfa, [1, 3], ...afa];
}

//
// function solution(n) {
//   if(n===1) return [[1,3]]
//   const temp =[...solution(n-1)]
// const bf = solution(n-1).map(e=>{
// if(e[0]===2) e[0]=3
// else if(e[0]===3) e[0]=2
// if(e[1]===2) e[1]=3
// else if(e[1]===3) e[1]=2
//   return e

// }    )

// const af = solution(n-1).map(e=>{
// if(e[0]===1) e[0]=2
// else if(e[0]===2) e[0]=1
// if(e[1]===1) e[1]=2
// else if(e[1]===2) e[1]=1
//   return e

// }    )

//   return [...bf, [1,3],...af];
// }
