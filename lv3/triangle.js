/*
위와 같은 삼각형의 꼭대기에서 바닥까지 이어지는 경로 중, 거쳐간 숫자의 합이 가장 큰 경우를 찾아보려고 합니다.
아래 칸으로 이동할 때는 대각선 방향으로 한 칸 오른쪽 또는 왼쪽으로만 이동 가능합니다. 예를 들어 3에서는 그 아래칸의 8 또는 1로만 이동이 가능합니다.
삼각형의 정보가 담긴 배열 triangle이 매개변수로 주어질 때, 거쳐간 숫자의 최댓값을 return 하도록 solution 함수를 완성하세요.

 */

function solution(triangle) {
    const dp = Array.from({ length: triangle.length }, (_, i) => Array(triangle[i].length).fill(-1));

    // dp[0][0] = triangle[0][0];

    // for(let i = 1; i < triangle.length; i++ ){
    //     for(let j = 0; j < triangle[i].length; j++ ){
    //         if ( j === 0 ) {
    //             dp[i][j] = dp[i-1][j] + triangle[i][j];
    //         } else if ( j === triangle[i].length -1 ) {
    //             dp[i][j] = dp[i-1][j-1] + triangle[i][j];
    //         } else {
    //             dp[i][j] = Math.max(dp[i-1][j-1], dp[i-1][j] ) + triangle[i][j];
    //         }
    //     }
    // }

    function findMaxPath(row,col) {
        if ( row === triangle.length - 1 ) {
          return triangle[row][col]
        }

        if (dp[row][col] !== -1) {
            return dp[row][col];
        }

        let left = findMaxPath(row+1, col);
        let right = findMaxPath(row+1, col+1);

        dp[row][col] = Math.max(left, right) + triangle[row][col];

        return dp[row][col]

    }

    return findMaxPath(0,0)
}

let triangle = [
    [7],
    [3, 8],
    [8, 1, 0],
    [2, 7, 4, 4],
    [4, 5, 2, 6, 5]
];
console.log(solution(triangle))