function solution(gems) {
    let gemsSet = [...new Set(gems)];
    let reversedGems = gems.reverse();
    let gemsLen = gems.length;
    if (gemsLen === 1) return [1, 1];

    let startpoint = 0;
    let endpoint = findIndexOfTarget(gems, gemsSet);
    startpoint = findIndexOfTarget(reversedGems, gemsSet, gemsLen - endpoint);
    return endpoint;
}

function findIndexOfTarget(arr, set, from) {
    let idx = 0;
    set.forEach(
        (e) => idx < arr.indexOf(e, from) && (idx = arr.indexOf(e, from))
    );
    return idx;
}
