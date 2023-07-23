function solution(k, dungeons) {
  let max = 0;
  const dungeonsWaves = dungeons.length;
  if (dungeonsWaves === 0) return 0;
  for (let i = 0; i < dungeonsWaves; i++) {
    const copyDungeons = [...dungeons];
    let innerMax = 0;
    if (k >= copyDungeons[i][0] && k >= copyDungeons[i][1]) {
      copyDungeons.splice(i, 1);
      innerMax = 1 + solution(k - dungeons[i][1], copyDungeons);
    } else {
      copyDungeons.splice(i, 1);
      innerMax = solution(k, copyDungeons);
    }
    if (max < innerMax) {
      max = innerMax;
    }
  }
  return max;
}

solution(80, [
  [80, 20],
  [50, 40],
  [30, 10],
]);
