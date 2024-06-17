//# https://school.programmers.co.kr/learn/courses/30/lessons/67256?language=javascript
function solution(numbers, hand) {
    var answer = "";
    let right = [3, 4];
    let left = [1, 4];
    function distance(a, b) {
        const [x1, y1] = a;
        const [x2, y2] = b;
        return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    }
    numbers.forEach((num) => {
        switch (num) {
            case 1:
            case 4:
            case 7:
                left = [1, Math.floor(num / 3) + 1];
                answer += "L";
                break;
            case 3:
            case 6:
            case 9:
                right = [3, Math.floor(num / 3)];
                answer += "R";
                break;
            case 2:
            case 5:
            case 8:
            case 0:
                const axisY = num === 0 ? 4 : Math.floor(num / 3) + 1;
                const numberCoordinate = [2, axisY];
                const whichFinger =
                    distance(numberCoordinate, left) -
                    distance(numberCoordinate, right);
                if (whichFinger > 0) {
                    right = numberCoordinate;
                    answer += "R";
                } else if (whichFinger < 0) {
                    left = numberCoordinate;
                    answer += "L";
                } else {
                    if (hand === "right") {
                        right = numberCoordinate;
                        answer += "R";
                    } else {
                        left = numberCoordinate;
                        answer += "L";
                    }
                }
                break;
            default:
        }
    });
    return answer;
}
