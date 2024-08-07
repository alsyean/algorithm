/*
계속되는 폭우로 일부 지역이 물에 잠겼습니다.
물에 잠기지 않은 지역을 통해 학교를 가려고 합니다.
집에서 학교까지 가는 길은 m x n 크기의 격자모양으로 나타낼 수 있습니다.
아래 그림은 m = 4, n = 3 인 경우입니다.

가장 왼쪽 위, 즉 집이 있는 곳의 좌표는 (1, 1)로 나타내고 가장 오른쪽 아래, 즉 학교가 있는 곳의 좌표는 (m, n)으로 나타냅니다.
격자의 크기 m, n과 물이 잠긴 지역의 좌표를 담은 2차원 배열 puddles이 매개변수로 주어집니다.
 오른쪽과 아래쪽으로만 움직여 집에서 학교까지 갈 수 있는 최단경로의 개수를 1,000,000,007로 나눈 나머지를 return 하도록 solution 함수를 작성해주세요.

 */
function solution(m, n, puddles) {
    const MOD = 1000000007;

    let memo = Array.from( { length: n}, () => Array(m).fill(-1));

    const puddleSet = new Set(puddles.map(p => `${p[1] - 1},${p[0] - 1}`));

    function dfs(x, y) {
        if ( x >= n || y >= m || puddleSet.has(`${x},${y}`) ) return 0;

        if ( x === n - 1 && y === m - 1) return  1;

        if ( memo[x][y] !== -1 ) return  memo[x][y];

        memo[x][y] = (dfs(x+1,y) + dfs(x,y+1)) % MOD;
        return memo[x][y];
    }

    return dfs(0, 0);
}

const n = 3;
const m = 4;
const puddles = [[2, 2]];

console.log(solution(n,m,puddles));
