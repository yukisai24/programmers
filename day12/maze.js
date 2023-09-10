// https://school.programmers.co.kr/learn/courses/30/lessons/159993
// 10점
function solution(maps) {
  const rows = maps.length; //줄 수
  const columns = maps[0].length; //컬럼 수
  maps = maps.map((e) => Array.from(e));
  const breakMaps = maps.flat();

  function findPoint(point) {
    //S L E 찾기
    const index = breakMaps.indexOf(point);
    return [index % columns, Math.floor(index / columns)];
  }

  let start = findPoint("S");
  let lever = findPoint("L");
  let end = findPoint("E");

  function findMinRoad(start, end) {
    let minCnt = 0;
    let visitMap = Array(rows)
      .fill(null)
      .map(() => Array(columns).fill(false)); //더 간결하게 나타내는 법?

    visitMap[start[1]][start[0]] = true; //처음 시작 점을 방문맵에 추가
    let pos = [start]; //현재점 리스트

    while (!check(pos, end)) {
      //현재 점 리스트에 목적점이 없으면 move후 cnt를 1더해주고 현재점리스트갱신, 현재점리스트의 길이가 0이면 불가능한 경로
      let temp = [];
      pos.forEach((point) => {
        //다음번엔 queue개념써서 짜기
        temp.push(...move(point, visitMap));
      });
      if (temp.length === 0) return -1;
      minCnt++;
      pos = temp;
    }
    return minCnt;
  }

  //현재 점과 방문기록맵 인풋, 한칸 이동한후의 점을 배열로 리턴
  const move = (point, visitMap) => {
    const [x, y] = point;
    let temp = [];

    x !== 0 && //끝점인지 확인
      maps[y][x - 1] !== "X" && //벽인지 확인
      !visitMap[y][x - 1] && //방문했던 곳인지 확인
      temp.push([x - 1, y]) && //리턴 배열에 추가
      (visitMap[y][x - 1] = true); // 방문 맵에 추가
    x !== columns - 1 &&
      maps[y][x + 1] !== "X" &&
      !visitMap[y][x + 1] &&
      temp.push([x + 1, y]) &&
      (visitMap[y][x + 1] = true);
    y !== 0 &&
      maps[y - 1][x] !== "X" &&
      !visitMap[y - 1][x] &&
      temp.push([x, y - 1]) &&
      (visitMap[y - 1][x] = true);
    y !== rows - 1 &&
      maps[y + 1][x] !== "X" &&
      !visitMap[y + 1][x] &&
      temp.push([x, y + 1]) &&
      (visitMap[y + 1][x] = true); //코드 줄이는법?
    return temp;
  };

  return findMinRoad(start, lever) !== -1 && findMinRoad(lever, end) !== -1 //둘 중 하나라도 -1 이면 -1을 리턴
    ? findMinRoad(start, lever) + findMinRoad(lever, end)
    : -1;
}

//배열중에 원하는 점이 있는지 확인하는 함수
const check = (pointArr, point) => {
  const [x, y] = point;
  return pointArr.some((point) => point[0] == x && point[1] == y);
};
