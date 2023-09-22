// https://school.programmers.co.kr/learn/courses/30/lessons/17679
//8점
function solution(m, n, board) {
  let tempBoard = [...board].map((row) => Array.from(row));
  while (true) {
    if (step(m, n, tempBoard) !== false) {
      tempBoard = step(m, n, tempBoard);
    } else return tempBoard.flat().filter((e) => e === "").length;
  }
}

const step = (m, n, board) => {
  let isBreak = false;
  let visited = [];
  board.forEach((e) => visited.push([...e]));
  for (let i = 0; i < m - 1; i++) {
    //세로줄
    for (let j = 0; j < n - 1; j++) {
      //가로줄
      if (
        board[i][j] !== "" &&
        board[i][j] == board[i][j + 1] &&
        board[i][j] == board[i + 1][j] &&
        board[i][j] == board[i + 1][j + 1]
      ) {
        visited[i][j] = "";
        visited[i + 1][j] = "";
        visited[i][j + 1] = "";
        visited[i + 1][j + 1] = "";
        isBreak = true;
      }
    }
  }
  if (!isBreak) {
    return false;
  }
  for (let i = 0; i < m - 1; i++) {
    //세로줄
    for (let j = 0; j < n; j++) {
      if (visited[i + 1][j] === "") {
        for (let k = i; k >= 0; k--) {
          visited[k + 1][j] = visited[k][j];
          visited[k][j] = "";
        }
      }
    }
  }
  return visited;
};

solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]);
["C", "C"], ["C", "C"], ["B", "B"], ["D", "D", "B", "B"], ["E", "E", "F", "F"];
