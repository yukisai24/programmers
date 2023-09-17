// https://school.programmers.co.kr/learn/courses/30/lessons/17679
function solution(m, n, board) {
  const splittedBoard = board.map((row) => Array.from(row));
  var answer = 0;
  step(m, n, splittedBoard);
  //   console.log(visited);

  //   return visited;
}

const step = (m, n, splittedBoard) => {
  console.log("1", splittedBoard);
  let visited = Array(m)
    .fill()
    .map(() => Array(n).fill(0));
  for (let i = 0; i < m - 1; i++) {
    //세로줄
    for (let j = 0; j < n - 1; j++) {
      //가로줄
      if (
        splittedBoard[i][j] == splittedBoard[i][j + 1] &&
        splittedBoard[i][j] == splittedBoard[i + 1][j] &&
        splittedBoard[i][j] == splittedBoard[i + 1][j + 1]
      ) {
        visited[i][j]++;
        visited[i + 1][j]++;
        visited[i][j + 1]++;
        visited[i + 1][j + 1]++;
      }
    }
  }
  let afterBoard = [];
  for (let j = 0; j < n; j++) {
    let afterCol = [];
    for (let i = m - 1; i >= 0; i--) {
      if (visited[i][j] !== 0) {
        for (let k = i; k >= 0; k--) {
          k !== 0 && (splittedBoard[k][j] = splittedBoard[k - 1][j]) && i++;
        }
      }
    }
    afterBoard.push(afterCol);
  }
  console.log("2", splittedBoard);

  console.log(afterBoard);
  return splittedBoard;
  splittedBoard.map(row);
};

solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]);
["C", "C"], ["C", "C"], ["B", "B"], ["D", "D", "B", "B"], ["E", "E", "F", "F"];
