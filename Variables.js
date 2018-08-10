"use strict";

/**
 * Var vs Let
 */

function hereBeVar () {
    for(var i = 0; i < 4; i++) {
        console.log('Var inside the loop and inside function-scope: ', i);
    };
    console.log('Var outside loop and inside function-scope: ', i);
 };

function hereBeLet () {
    console.log('\n')
    for(let i = 0; i < 4; i++) {
        console.log('Let inside the loop and inside function-scope: ', i);
    };
    try {
        console.log('Let outside loop and inside function-scope: ', i);
    }
    catch (error) {
        console.log('Error: seems like i is not defined outside the containing block\n', error)
    }
 };

hereBeVar();
hereBeLet();