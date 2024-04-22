//https://leetcode.com/problems/to-be-or-not-to-be/description/?envType=study-plan-v2&envId=30-days-of-javascript


var expect = function(val) {
    return {
        toBe: (val1) => {
            if(val !== val1) {
                throw new Error('Not Equal');
            } 
            else {
                return true;
            } 
        },
        notToBe: (val2) => {
            if(val === val2) {
                throw new Error('Equal');
            } 
            else {
                return true;
            } 
        }
    }
};


try {
    console.log(expect(5).toBe(5));
    console.log(expect(5).notToBe(5));
} catch (error) {
    console.log(error.message);
}