function solution(cards1, cards2, goal) {

    let answer = 'Yes';

    const goalForCard1 = goal.filter( (v) => cards1.includes(v));

    const goalForCard2 = goal.filter( (v) => cards2.includes(v));


    for (let idx = 0; idx <goalForCard1.length; idx ++) {
        if ( cards1[idx] !== goalForCard1[idx]) {
            answer = "No";
            break;
        }
    }

    for (let idx = 0; idx <goalForCard2.length; idx ++) {
        if ( cards2[idx] !== goalForCard2[idx]) {
            answer = "No";
            break;
        }
    }
    return answer;
}

// const cards1 = ["i", "drink", "water"];
// const cards2 = ["want", "to"];
// const goal = ["i", "want", "to", "drink", "water"];


const cards1 = ["i", "water", "drink"];
const cards2 =  ["want", "to"];
const goal = ["i", "want", "to", "drink", "water"];

console.log( solution(cards1, cards2, goal) )