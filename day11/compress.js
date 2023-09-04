function solution(arr) {
  const len = arr.length;
  if (len === 1) return arr[0][0] === 1 ? [0, 1] : [1, 0];
  else if (arr.every((e) => e.every((e) => e === 0))) return [1, 0];
  else if (arr.every((e) => e.every((e) => e === 1))) return [0, 1];
  else {
    let a = [];
    let s = [];
    let d = [];
    let f = [];
    for (let i = 0; i < len / 2; i++) {
      const [q, w] = breakArr(arr[i]);
      a.push(q);
      s.push(w);
    }
    for (let i = len / 2; i < len; i++) {
      const [q, w] = breakArr(arr[i]);
      d.push(q);
      f.push(w);
    }
    let t = 0;
    let y = 0;
    let u = [];
    u.push(a, s, d, f);
    u.forEach((e) => {
      let [z, x] = solution(e);
      t += z;
      y += x;
    });
    return [t, y];
  }
}

function breakArr(arr) {
  const len = arr.length;
  const halfLen = len / 2;
  const front = arr.slice(0, halfLen);
  const back = arr.slice(halfLen);
  return [front, back];
}
