//# https://school.programmers.co.kr/learn/courses/30/lessons/42862?language=javascript
function solution(n, lost, reserve) {
    let filteredLost = lost
        .filter((student) => !reserve.includes(student))
        .sort((a, b) => a - b);
    let filteredReserve = reserve.filter((student) => !lost.includes(student));
    let answer = n - filteredLost.length;
    for (let student of filteredLost) {
        if (filteredReserve.includes(student - 1)) {
            answer++;
            filteredReserve.splice(filteredReserve.indexOf(student - 1), 1);
        } else if (filteredReserve.includes(student + 1)) {
            answer++;
            filteredReserve.splice(filteredReserve.indexOf(student + 1), 1);
        }
    }
    return answer;
}
