/*
두 문자열 s와 skip, 그리고 자연수 index가 주어질 때, 다음 규칙에 따라 문자열을 만들려 합니다. 암호의 규칙은 다음과 같습니다.

문자열 s의 각 알파벳을 index만큼 뒤의 알파벳으로 바꿔줍니다.
index만큼의 뒤의 알파벳이 z를 넘어갈 경우 다시 a로 돌아갑니다.
skip에 있는 알파벳은 제외하고 건너뜁니다.
예를 들어 s = "aukks", skip = "wbqd", index = 5일 때, a에서 5만큼 뒤에 있는 알파벳은 f지만 [b, c, d, e, f]에서 'b'와 'd'는 skip에 포함되므로 세지 않습니다. 따라서 'b', 'd'를 제외하고 'a'에서 5만큼 뒤에 있는 알파벳은 [c, e, f, g, h] 순서에 의해 'h'가 됩니다. 나머지 "ukks" 또한 위 규칙대로 바꾸면 "appy"가 되며 결과는 "happy"가 됩니다.

두 문자열 s와 skip, 그리고 자연수 index가 매개변수로 주어질 때 위 규칙대로 s를 변환한 결과를 return하도록 solution 함수를 완성해주세요.
 */

function solution(s, skip, index) {

    let answer = "";

    // 알파벳 배열
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
        "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
        "u", "v", "w", "x", "y", "z"];

    // skip에 해당되는 알파벳 제외
    const skip_alphabet = alphabet.filter(v => !skip.includes(v))

    // 단어를 배열로 변환
    const word = s.split("");

    // 단어를 반복
    word.forEach( (v) => {
        // z가 초과 하지 않을 경우 indexOf로 현재 위치 + index
        if ( (skip_alphabet.indexOf(v) + index) < skip_alphabet.length) {
            answer += skip_alphabet[skip_alphabet.indexOf(v) + index];
        }
        // z 위치를 초과 할 경우 % 식으로 0부터 시작
        else {
            answer += skip_alphabet[ (skip_alphabet.indexOf(v) + index) % skip_alphabet.length];
        }

    })

    return answer;
}

const s = "aukks";
const skip = "wbqd";
const index = 5;

console.log(solution(s, skip, index))