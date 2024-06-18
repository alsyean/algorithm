function solution(a, b, n) {
    let answer = 0;

    let current = n;
    let remain = 0;


    while ( current >= a ) {
        if ( current / a > 0 ) {
            remain = current % a ;
            current = Math.floor((current / a) ) * b;
            answer += current;

            if (remain !== 0) {
                current += remain;
            }

        }
    }


    return answer;
}

// const a = 2;
// const b = 1;
// const n = 20;

const a = 8;
const b = 1;
const n = 20;

// const a = 5
// const b = 3
// const n = 21

console.log(solution(a,b,n));