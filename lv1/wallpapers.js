// https://school.programmers.co.kr/learn/courses/30/lessons/161990

function solution(wallpaper) {
    // 초기화: 최댓값과 최솟값을 찾기 위해 적절한 초기화값 설정
    let minRow = wallpaper.length; // 최소 행 인덱스 (큰 값으로 초기화)
    let maxRow = 0; // 최대 행 인덱스 (작은 값으로 초기화)
    let minCol = wallpaper[0].length; // 최소 열 인덱스 (큰 값으로 초기화)
    let maxCol = 0; // 최대 열 인덱스 (작은 값으로 초기화)

    wallpaper.forEach((row, rowIndex) => {
        if (row.includes('#')) {
            // '#'의 첫 번째와 마지막 위치를 찾음
            let firstIndex = row.indexOf('#');
            let lastIndex = row.lastIndexOf('#');

            // 최소 및 최대 열 인덱스 업데이트
            minCol = Math.min(minCol, firstIndex);
            maxCol = Math.max(maxCol, lastIndex);

            // 최소 및 최대 행 인덱스 업데이트
            minRow = Math.min(minRow, rowIndex);
            maxRow = Math.max(maxRow, rowIndex);
        }
    });

    // 결과 배열에 최종 드래그 범위 추가
    return [minRow, minCol, maxRow + 1, maxCol + 1];
}


const wallpaper = [
    ".#...",
    "..#..",
    "...#."
];

const w2 = [
    "..........",
    ".....#....",
    "......##..",
    "...##.....",
    "....#....."
];

const w3 = [
    ".##...##.",
    "#..#.#..#",
    "#...#...#",
    ".#.....#.",
    "..#...#..",
    "...#.#...",
    "....#...."
]

const w4 = [
    "..",
    "#."
]


console.log(solution(w2));