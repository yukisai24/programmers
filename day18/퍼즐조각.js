function solution(game_board, table) {
    var answer = -1;
    let hole = findConnectedComponents(game_board, 0);
    let puzzle = findConnectedComponents(table, 1);

    return removeCommonShapes(hole, puzzle);
}

function findConnectedComponents(board, flag) {
    const rows = board.length;
    const cols = board[0].length;
    const visited = Array(rows)
        .fill(null)
        .map(() => Array(cols).fill(false));
    const components = [];

    function isValidCell(row, col) {
        return row >= 0 && col >= 0 && row < rows && col < cols;
    }

    function dfs(row, col, component, flag) {
        if (
            isValidCell(row, col) &&
            board[row][col] === flag &&
            !visited[row][col]
        ) {
            visited[row][col] = true;
            component.push([row, col]);

            // Check adjacent cells
            dfs(row - 1, col, component, flag); // Up
            dfs(row + 1, col, component, flag); // Down
            dfs(row, col - 1, component, flag); // Left
            dfs(row, col + 1, component, flag); // Right
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === flag && !visited[i][j]) {
                const component = [];
                dfs(i, j, component, flag);
                components.push(component);
            }
        }
    }

    return components;
}

// 도형을 정렬하여 표준 형태로 변환
function normalizeShape(shape) {
    return shape.slice().sort((a, b) => {
        return a[0] - b[0] !== 0 ? a[0] - b[0] : a[1] - b[1];
    });
}

// 모든 회전 및 반사 변환을 적용하여 모든 가능한 형태 찾기
function getAllTransformedShapes(shape) {
    const transformedShapes = [];
    for (let i = 0; i < 4; i++) {
        // 90도씩 회전
        const rotatedShape = shape.map(([x, y]) => [y, -x]);
        transformedShapes.push(normalizeShape(rotatedShape));

        // 좌우 반전
        // const reflectedShape = shape.map(([x, y]) => [-x, y]);
        // transformedShapes.push(normalizeShape(reflectedShape));

        shape = rotatedShape;
    }
    return transformedShapes;
}

// 두 도형이 동일한지 확인
function areShapesEqual(shape1, shape2) {
    const normalizedShapes1 = getAllTransformedShapes(shape1);
    const normalizedShapes2 = getAllTransformedShapes(shape2);

    for (const normShape1 of normalizedShapes1) {
        for (const normShape2 of normalizedShapes2) {
            if (JSON.stringify(normShape1) === JSON.stringify(normShape2)) {
                return true;
            }
        }
    }

    return false;
}
function removeCommonShapes(a, b) {
    // a와 b의 모든 도형을 정규화하여 저장합니다.
    const normalizedA = a.map(normalizeShape);
    const normalizedB = b.map(normalizeShape);

    let removedCount = 0;

    for (let i = 0; i < a.length; i++) {
        if (!normalizedA[i]) {
            continue;
        }

        for (let j = 0; j < b.length; j++) {
            if (!normalizedB[j]) {
                continue;
            }

            // 도형이 a와 b에서 모두 존재하면 해당 도형을 제거합니다.
            // if (JSON.stringify(normalizedA[i]) === JSON.stringify(normalizedB[j])) {
            if (areShapesEqual(normalizedA[i], normalizedB[j])) {
                a[i] = null;
                b[j] = null;
                removedCount++;
                // removedCount += normalizedA.length;
                break;
            }
        }
    }

    // 제거 대상인 도형을 실제로 제거합니다.
    a = a.filter((shape) => shape !== null);
    b = b.filter((shape) => shape !== null);

    return removedCount;
}
