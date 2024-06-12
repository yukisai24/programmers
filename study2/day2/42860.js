function solution(name) {
    var answer = 0;
    const alphabets = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];

    let notAList = [];
    for (let i = 0; i < name.length; i++) {
        const index = alphabets.indexOf(name[i]);
        answer += index > 13 ? 26 - index : index;
        if (index !== 0) {
            notAList.push(i);
        }
    }
    if (notAList.length === 0) return 0;
    if (notAList.length === 1) return answer;
    let move = Math.min(notAList[-1], 26 - notAList[0]);
    for (let i = 0; i < notAList.length - 1; i++) {
        let _move =
            notAList[i] +
            (name.length - notAList[i + 1]) +
            Math.min(notAList[i], name.length - notAList[i + 1]);
        _move < move && (move = _move);
    }
    name.length > notAList[notAList.length - 1] &&
        move > notAList[notAList.length - 1] &&
        (move = notAList[notAList.length - 1]);
    answer += move;
    return answer;
}
