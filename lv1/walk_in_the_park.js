// https://school.programmers.co.kr/learn/courses/30/lessons/172928

/*
지나다니는 길을 'O', 장애물을 'X'로 나타낸 직사각형 격자 모양의 공원에서 로봇 강아지가 산책을 하려합니다. 산책은 로봇 강아지에 미리 입력된 명령에 따라 진행하며,
 명령은 다음과 같은 형식으로 주어집니다.

["방향 거리", "방향 거리" … ]
예를 들어 "E 5"는 로봇 강아지가 현재 위치에서 동쪽으로 5칸 이동했다는 의미입니다. 로봇 강아지는 명령을 수행하기 전에 다음 두 가지를 먼저 확인합니다.

주어진 방향으로 이동할 때 공원을 벗어나는지 확인합니다.
주어진 방향으로 이동 중 장애물을 만나는지 확인합니다.
위 두 가지중 어느 하나라도 해당된다면, 로봇 강아지는 해당 명령을 무시하고 다음 명령을 수행합니다.
공원의 가로 길이가 W, 세로 길이가 H라고 할 때, 공원의 좌측 상단의 좌표는 (0, 0), 우측 하단의 좌표는 (H - 1, W - 1) 입니다.

공원을 나타내는 문자열 배열 park, 로봇 강아지가 수행할 명령이 담긴 문자열 배열 routes가 매개변수로 주어질 때,
로봇 강아지가 모든 명령을 수행 후 놓인 위치를 [세로 방향 좌표, 가로 방향 좌표] 순으로 배열에 담아 return 하도록 solution 함수를 완성해주세요.

 */

function solution(park, routes) {

    let dog = [] ;
    let minX = 0 ;
    let maxX = park[0].length - 1;
    let minY = 0;
    let maxY = park.length - 1;

    for (let idx = 0; idx < park.length; idx ++ ){
        if ( park[idx].includes('S') ) {
            dog = [idx, park[idx].indexOf('S')];
            break;
        }
    }

    for (let idx = 0; idx < routes.length; idx ++ ){
        let direction = routes[idx].split(' ')[0];
        let distance = parseInt( routes[idx].split(' ')[1]);

        let newX = dog[1];
        let newY = dog[0];

        let move = true;

        if (direction === 'E') newX += distance;
        if (direction === 'W') newX -= distance;
        if (direction === 'S') newY += distance;
        if (direction === 'N') newY -= distance;

        if (newX < minX || newX > maxX || newY < minY || newY > maxY) {
            continue;
        }

        if ( direction === 'E' || direction === 'W') {
            let start = Math.min(dog[1], newX);
            let end = Math.max(dog[1], newX);
            for (let x = start; x <= end; x++) {
                if (park[newY][x] === 'X') {
                    move = false;
                    break;
                }
            }
        } else if ( direction === 'S' || direction === 'N') {
            let start = Math.min(dog[0], newY);
            let end = Math.max(dog[0], newY);
            for (let y = start; y <= end; y++) {
                if (park[y][newX] === 'X') {
                    move = false;
                    break;
                }
            }
        }

        if (move) {
            dog = [newY, newX];
        }

    }

    return dog;
}


const park = ["SOO","OOO","OOO"];
const routes = ["E 2","S 2","W 1"];

const p1 = [
    "OSO",
    "OOO",
    "OXO",
    "OOO"
];
const r1 = ["E 2","S 3","W 1"];

// console.log(solution(park, routes));
console.log(solution(p1, r1));