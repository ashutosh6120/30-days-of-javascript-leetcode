//https://leetcode.com/problems/counter-ii/description/?envType=study-plan-v2&envId=30-days-of-javascript


var createCounter = function(init) {
    let presentCount = init;
    return {
        increment: () => {
            return ++presentCount;
        },
        decrement: () => {
            return --presentCount;
        },
        reset: () => {
            return presentCount = init;
        }
    }
};

const counter = createCounter(5)
 console.log( counter.increment()); // 6
 console.log( counter.reset()); // 5
 console.log( counter.decrement()); // 4