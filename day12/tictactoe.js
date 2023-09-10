// https://school.programmers.co.kr/learn/courses/30/lessons/160585
// 9점
function solution(board) {
  const breakBoard = board.map((e) => Array.from(e)).flat();

  let o = breakBoard.filter((e) => e === "O").length;
  let x = breakBoard.filter((e) => e === "X").length;
  const bingoO = lineCheck("O", breakBoard);
  const bingoX = lineCheck("X", breakBoard);

  if (o < x) return 0; // o 가 x보다 갯수가 적은 경우 o
  if (o == x && bingoO > 0) return 0; // o x 갯수가 같은데 o빙고 있는경우
  if (o == x + 1 && bingoX > 0) return 0; // o가 x보다 갯수가 하나 많은데 x빙고
  if (o > x + 1) return 0; // o가 x보다 두개 이상 많은 경우 o

  if (bingoO + bingoX > 1) return o + x == 9 ? 1 : 0; // o가 완성된 라인이 두개 이상인 경우

  return 1;
}

function lineCheck(ox, breakBoard) {
  let bingo = 0;
  //가로줄 빙고
  breakBoard[0] == ox && breakBoard[1] == ox && breakBoard[2] == ox && bingo++;
  breakBoard[3] == ox && breakBoard[4] == ox && breakBoard[5] == ox && bingo++;
  breakBoard[6] == ox && breakBoard[7] == ox && breakBoard[8] == ox && bingo++;
  //세로줄 빙고
  breakBoard[0] == ox && breakBoard[3] == ox && breakBoard[6] == ox && bingo++;
  breakBoard[1] == ox && breakBoard[4] == ox && breakBoard[7] == ox && bingo++;
  breakBoard[2] == ox && breakBoard[5] == ox && breakBoard[8] == ox && bingo++;
  //대각선 빙고
  breakBoard[0] == ox && breakBoard[4] == ox && breakBoard[8] == ox && bingo++;
  breakBoard[2] == ox && breakBoard[4] == ox && breakBoard[6] == ox && bingo++;
  return bingo;
}
//6 12 23 30 33 42
//마지막 수가 빙고 두개를 만드는 경우가 있음
