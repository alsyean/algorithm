// https://school.programmers.co.kr/learn/courses/30/lessons/77484
function solution(lottos, win_nums) {
    let answer = [];

    const unknown = lottos.filter((e) => e === 0).length

    const min_correct = win_nums.filter((v) => lottos.includes(v) ).length

    const max_correct = min_correct + unknown;

    max_correct > 1 ? answer.push(win_nums.length + 1 -max_correct ) : answer.push(6);
    min_correct > 1 ? answer.push(win_nums.length + 1 -min_correct ) : answer.push(6);

    return answer;
}

// const lottos = [44, 1, 0, 0, 31, 25];
// const win_nums = [31, 10, 45, 1, 6, 19];

const lottos = [0, 0, 0, 0, 0, 0]
const win_nums =  [38, 19, 20, 40, 15, 25]

console.log(solution(lottos, win_nums));