function solution(arr) {
    const targetStrings = [...new Set(arr)];
    const targetCounts = new Map();
    for (const str of targetStrings) {
        targetCounts.set(str, 0);
    }

    let left = 0;
    let count = 0;
    let minLen = Infinity;
    let result = [0, 0];

    for (let right = 0; right < arr.length; right++) {
        if (targetCounts.has(arr[right])) {
            targetCounts.set(arr[right], targetCounts.get(arr[right]) + 1);
            if (targetCounts.get(arr[right]) === 1) {
                count++;
            }
        }

        while (count === targetStrings.length) {
            if (right - left < minLen) {
                minLen = right - left;
                result = [left + 1, right + 1];
            }

            targetCounts.set(arr[left], targetCounts.get(arr[left]) - 1);
            if (targetCounts.get(arr[left]) === 0) {
                count--;
            }

            left++;
        }
    }

    return result;
}
