// https://school.programmers.co.kr/learn/courses/30/lessons/49994
function solution(dirs) {
  var answer = 0;
  let position = [5, 5];
  let roads = {
    rows: [],
    columns: [],
  };
  for (let i = 0; i < dirs.length; i++) {
    let direction = dirs[i];
    let [x, y] = position;

    let temp = [];
    if (direction === "L") {
      if (position[0] === 0) continue;
      else {
        temp = [position[0] - 1, position[1]];
        if (
          roads.rows.find((e) => e[0] === temp[0] && e[1] === temp[1]) ==
          undefined
        ) {
          roads.rows.push(temp);
          answer++;
        }
      }
      position = [x - 1, y];
    }
    if (direction === "R") {
      if (position[0] === 10) continue;
      else {
        temp = [position[0], position[1]];
        if (
          roads.rows.find((e) => e[0] === temp[0] && e[1] === temp[1]) ==
          undefined
        ) {
          roads.rows.push(temp);
          answer++;
        }
      }
      position = [x + 1, y];
    }
    if (direction === "D") {
      if (position[1] === 0) continue;
      else {
        temp = [position[0], position[1] - 1];
        if (
          roads.columns.find((e) => e[0] === temp[0] && e[1] === temp[1]) ==
          undefined
        ) {
          roads.columns.push(temp);
          answer++;
        }
      }
      position = [x, y - 1];
    }
    if (direction === "U") {
      if (position[1] === 10) continue;
      else {
        temp = [position[0], position[1]];
        if (
          roads.columns.find((e) => e[0] === temp[0] && e[1] === temp[1]) ==
          undefined
        ) {
          roads.columns.push(temp);
          answer++;
        }
      }
      position = [x, y + 1];
    }
  }
  return answer;
}
