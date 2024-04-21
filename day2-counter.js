//https://leetcode.com/problems/counter/description/?envType=study-plan-v2&envId=30-days-of-javascript


// Closure--  A closure is created when a function is defined inside another function, and the inner 
//            function references variables in the outer function's scope. When the inner function is 
//            returned from the outer function, it retains a reference to the outer function's scope, 
//            and can continue to access those variables even after the outer function has finished executing. Vice-Versa is not true!!


//            In simple terms a closure can "remember" values from its outer function's scope and use 
//            them later, even if the outer function has returned and those values would normally be out of scope.



// A closure in JavaScript is like a backpack that a function carries around. This backpack has all the 
// variables (or stuff) that the function might need.
// Imagine you’re going on a trip (this is like the function being called or executed). Before you leave,
// you pack your backpack with everything you’ll need on your trip (these are like the variables that the 
// function will need to use). Even after you’ve left your house (the function has been called), you still have 
// access to everything in your backpack (the function can still use the variables).
// In JavaScript, whenever you create a function, it automatically gets a backpack (closure) with it. This backpack 
// contains all the variables that the function might need, even after it’s done executing.
// This is useful because it allows the function to remember and use variables from its surrounding scope, 
// even after the outer function has finished executing.


var createCounter = function(n) {
    return function() {
        return n++;
    };
};

const counter = createCounter(-2);
counter();
counter();
counter();
counter();
counter();