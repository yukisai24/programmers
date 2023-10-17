function solution(gems) {
    let gemsSet = [...new Set(gems)];
    if (gemsSet.length === 1) return [1, 1];

    // let gemsCounter = gems.reduce((prev, curr, index) => {
    //     if (prev[curr]) ++prev[curr];
    //     else {
    //         prev[curr] = 1;
    //         Object.keys(prev).length === gemsSet.length && (endIndex = index);
    //     }
    //     return prev;
    // }, {});

    let startIndex = 0;
    let endIndex = 0;
    gemsSet.forEach(
        (e) => gems.indexOf(e) > endIndex && (endIndex = gems.indexOf(e))
    );
    let gemsCounter = gems
        .slice(startIndex, endIndex + 1)
        .reduce((prev, curr) => {
            prev[curr] = ++prev[curr] || 1;
            return prev;
        }, {});

    let answer = [startIndex + 1, endIndex + 1];
    let cnt = endIndex - startIndex;

    while (true) {
        for (let i = startIndex; i <= endIndex; i++) {
            gemsCounter[gems[i]] -= 1;
            if (gemsCounter[gems[i]] == 0) {
                if (endIndex - startIndex < cnt)
                    answer = [startIndex + 1, endIndex + 1];

                let _endIndex = gems.indexOf(gems[i], endIndex + 1);
                if (_endIndex === -1) {
                    return answer;
                }
                for (let j = endIndex + 1; j <= _endIndex; j++) {
                    gemsCounter[gems[i]] += 1;
                }
                endIndex = _endIndex;
                startIndex += 1;

                break;
            }
            startIndex += 1;
        }
    }
}

// function solution(gems) {
//   let gemsSet = [...new Set(gems)];
//   let gemsCnter = gemsSet.reduce((prev, curr) => {
//     prev[curr] = 0;
//   }, {});
//   let gemsType = gemsSet.length;
//   let temp = [];
//   for (let i = 0; i < gems.length; i++) {
//     gemsCnter[gems[i]] === 0 && (temp.push(gems[i]), gemsCnter[gems[i]]++);
//     count;
//   }
//   return answer;
// }
