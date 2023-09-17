// https://school.programmers.co.kr/learn/courses/30/lessons/169198
function solution(m, n, startX, startY, balls) {
  var answer = [];
  const pow = (arr) => arr[0] ** 2 + arr[1] ** 2;
  answer = balls.map((ball) => {
    let x;
    let y;
    let x1 = startX;
    let x2 = ball[0];
    let y1 = startY;
    let y2 = ball[1];
    if (y1 === y2)
      x = x1 > x2 ? pow([2 * m - x1 - x2, y2 - y1]) : pow([x1 + x2, y2 - y1]);
    else if (x1 + x2 > m) x = pow([2 * m - x1 - x2, y2 - y1]);
    else x = pow([x1 + x2, y2 - y1]);

    if (x1 === x2)
      y = y1 > y2 ? pow([2 * n - y1 - y2, x2 - x1]) : pow([y1 + y2, x2 - x1]);
    else if (y1 + y2 > n) y = pow([x2 - x1, 2 * n - y1 - y2]);
    else y = pow([x2 - x1, y1 + y2]);
    return Math.min(x, y);
  });
  return answer;
}
