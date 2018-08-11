"use strict";

/**
 * Hoisted variables are undefined.
 */

console.log(hoistedVar);

var hoistedVar = 'Hi, im a hoisted variable!';

 /**
  * Const and Let do not get defined as 'undefined'
  * They throw Reference Error when used before being evaluated
  */

try {
    console.log(hostedLet);
}
catch (error) {
    console.error(error);
};

let hostedLet = 'Hi, im a hoisted let';

try {
    console.log(hostedConst);
}
catch (error) {
    console.error(error);
};

let hostedConst = 'Hi, im a hoisted const';