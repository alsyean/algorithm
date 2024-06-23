/*
0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.
예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.
0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를
문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.
 */

function solution(numbers) {
    // 숫자를 문자열로 변환하여 정렬 기준에 따라 정렬
    numbers.sort((a, b) => {
        // 두 숫자를 문자열로 변환하고, 두 가지 경우를 비교
        let strA = a.toString();
        let strB = b.toString();
        return (strB + strA) - (strA + strB);
    });

    // 정렬된 숫자를 문자열로 변환하여 합침
    let result = numbers.join('');

    // 결과가 0으로 시작할 경우를 처리 (예: [0, 0, 0])
    return result[0] === '0' ? '0' : result;
}

const numbers = [6, 10, 2];

console.log(solution(numbers));