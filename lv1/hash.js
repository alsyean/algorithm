/*

수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때,
완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

 */

function solution(participant, completion) {
    let answer = '';

    let participant_hash = {};
    let completion_hash = {};

    participant.forEach((v,i) => {
        if ( participant_hash.hasOwnProperty(v) ) {
            participant_hash[v] += 1;
        } else {
            participant_hash[v] = 1;
        }
    })

    completion.forEach((v,i) => {
        if ( participant_hash.hasOwnProperty(v) ) {
            participant_hash[v] -= 1;
            if (participant_hash[v] === 0) {
                delete participant_hash[v]
            }

        }
    })

    answer = Object.keys(participant_hash)[0];

    return answer;
}

const participant = ["leo", "kiki", "eden"];
const completion = ["eden", "kiki"];

// const participant = ["mislav", "stanko", "mislav", "ana"];
// const completion = ["stanko", "ana", "mislav"];

console.log(solution(participant, completion));