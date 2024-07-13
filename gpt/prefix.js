/*
문제: 공통 접두어 찾기
주어진 문자열 배열에서 모든 문자열이 공통으로 가지는 가장 긴 접두어(prefix)를 찾으세요.
예를 들어, 주어진 문자열 배열이 ["flower", "flow", "flight"]인 경우, 공통 접두어는 "fl"입니다.

입력
문자열 배열 strs가 주어집니다. (길이는 1 이상)
출력
모든 문자열이 공통으로 가지는 가장 긴 접두어를 문자열로 반환합니다.

 */

function solution(strs) {
    let answer = "";

    let min = Math.min(...strs.map(str => str.length));

    let low = 0;
    let high = min;


    while ( low <= high ) {
        let mid = Math.floor((low + high) / 2);
        if (isCommonPrefix(strs, mid)) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return strs[0].substring(0, Math.floor((low + high) / 2));
}
function isCommonPrefix(strs, len) {
    let prefix = strs[0].substring(0, len);
    for (let i = 1; i < strs.length; i++) {
        if (!strs[i].startsWith(prefix)) {
            return false;
        }
    }
    return true;
}

let strs = ["flower", "flow", "flight"]; // fl

console.log(solution(strs));

strs = ["dog", "caracecar", "car"] // ""

console.log(solution(strs));