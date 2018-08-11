"use strict";

/**
 * Hoisted function-declarations are fully usable
 * Hoisted function-expressions are functions stored in variables
 * Hoisted variables are not accessible when hoisted
 */

hoistedDeclaraction();

try {
    hoistedExpression();
}
catch (error) {
    console.log('\n', error);
};




 function hoistedDeclaraction () {
     let value = 10;
     console.log('Printing value of hoisted function declaration: ', value);
 };

 let hoistedExpression = function () {
    let value = 100;
    console.log('Printing value of hoisted function expression: ', value);
 };

