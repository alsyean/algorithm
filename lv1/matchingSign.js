/*
두 정수 X, Y의 임의의 자리에서 공통으로 나타나는 정수 k(0 ≤ k ≤ 9)들을 이용하여 만들 수 있는 가장 큰 정수를 두 수의 짝꿍이라 합니다
(단, 공통으로 나타나는 정수 중 서로 짝지을 수 있는 숫자만 사용합니다).
 X, Y의 짝꿍이 존재하지 않으면, 짝꿍은 -1입니다. X, Y의 짝꿍이 0으로만 구성되어 있다면, 짝꿍은 0입니다.
예를 들어, X = 3403이고 Y = 13203이라면, X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 3, 0, 3으로 만들 수 있는 가장 큰 정수인 330입니다.
 다른 예시로 X = 5525이고 Y = 1255이면 X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 2, 5, 5로 만들 수 있는 가장 큰 정수인 552입니다
 (X에는 5가 3개, Y에는 5가 2개 나타나므로 남는 5 한 개는 짝 지을 수 없습니다.)
두 정수 X, Y가 주어졌을 때, X, Y의 짝꿍을 return하는 solution 함수를 완성해주세요.
 */

function solution(X, Y) {
    let answer = '';

    let x_map = {};
    let y_map = {};
    let total_map = {};
    let number = [];

    X.split('').forEach( (x)=>{
        x_map[x] = Object.keys(x_map).includes(x) ? x_map[x] + 1 : 1;
    });

    Y.split('').forEach( (y)=>{
        y_map[y] = Object.keys(y_map).includes(y) ? y_map[y] + 1 : 1;
    });

    Object.keys(x_map).forEach((e)=>{
        if ( Object.keys(y_map).includes(e) ) {
            for ( let i = 0; i < Math.min(y_map[e],x_map[e]); i++ ){
                number.push(e);
                total_map[e] = Object.keys(total_map).includes(e) ? total_map[e] + 1 : 1;
            }
        }
    })

    if ( Object.keys(total_map).length === 1 && Object.keys(total_map).includes('0')) {
        answer = '0';
    } else {
        answer = number.length === 0 ? -1 : number.sort( (a,b) => (b-a)).join('').toString();
    }

    return answer.toString();
}

// const X = "100";
// const Y = "2345";

// const Y = "123450";
// const Y = "203045";

// const X = "12321";
// const Y = "42531";


const X = "99999999999999999999";
const Y = "99999999999999999999";


console.log(solution(X,Y))
