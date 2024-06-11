// https://school.programmers.co.kr/learn/courses/30/lessons/43163
function canTransform(word1, word2) {
  let diffCount = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      diffCount++;
      if (diffCount > 1) {
        return false;
      }
    }
  }
  return diffCount === 1;
}

function solution(begin, target, words) {
  if (!words.includes(target)) {
    return 0;
  }

  const visited = new Set();
  const queue = [[begin, 0]];

  while (queue.length > 0) {
    const [currentWord, level] = queue.shift();

    if (currentWord === target) {
      return level;
    }

    for (const word of words) {
      if (!visited.has(word) && canTransform(currentWord, word)) {
        visited.add(word);
        queue.push([word, level + 1]);
      }
    }
  }

  return 0;
}
