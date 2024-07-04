/*
정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아
더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.
 */

function solution(numbers) {
    let result = [];

    function sum(begin, increase) {
        if ( parseInt(increase) === numbers.length ) {
            return
        }
        result.push(parseInt(begin) + parseInt(numbers[parseInt(increase)]))
        sum(begin, parseInt(increase) + 1)
    }

    for (let i =0; i < numbers.length - 1; i++ ){
        let begin = numbers[i];
        sum(begin, i+1);
    }

    return Array.from(new Set(result)).sort((a, b) => a - b);
}

const numbers = [2,1,3,4,1];

console.log(solution(numbers));