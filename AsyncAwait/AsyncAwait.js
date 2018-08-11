"use strict";

/**
 * Async Functions can use keyword Await
 * Await indicates that function will wait until
 * codeblock after Await resolves
 * Then rest of instructions will be carried out
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