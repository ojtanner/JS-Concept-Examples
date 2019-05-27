"use strict";

/**
 * Async Functions can use the keyword "await"
 * Await indicates that the function will wait until
 * the codeblock after Await resolves
 * Then the rest of the instructions will be carried out
 * Non-Blocking.
 */

async function asyncExample (number) {
    let doubledNumber = await doubleNumber(number)
    console.log(doubledNumber);
};
 
function doubleNumber (number) {
    return new Promise (resolve => {
        setTimeout(resolve, 3000)
    })
        .then(() => number * 2);
};

asyncExample(20);
