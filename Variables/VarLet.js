"use strict";

/**
 * Var vs Let
 */

/*
===================================================
Section 1: Scope
===================================================
*/

console.log("1.) Scope");

/*
 * Var is function scoped
 * Let is block scoped
 */
function hereBeVar() {
  for (var i = 0; i < 4; i++) {
    console.log("Var inside the loop and inside function-scope: ", i);
  }
  console.log("Var outside loop and inside function-scope: ", i);
}

function hereBeLet() {
  console.log("\n");
  for (let i = 0; i < 4; i++) {
    console.log("Let inside the loop and inside function-scope: ", i);
  }
  try {
    console.log("Let outside loop and inside function-scope: ", i);
  } catch (error) {
    console.log(
      "Error: seems like i is not defined outside the containing block\n",
      error
    );
  }
}

hereBeVar();
hereBeLet();

/*
===================================================
Section 2: Re-declaration and reassignment
===================================================
*/

console.log("2.) Re-declaration and reassignment");

/*
 * Var can be redeclared as well as reassigned.
 */

var myName = "Fred";
console.log(`Declared var myName: ${myName}`);

var myName = "Barney";
console.log(`Redeclared var myName: ${myName}`);

myName = "Wilma";
console.log(`Reassigned var myName: ${myName}`);

/*
 * Let can not be redeclared, but can be reassigned.
 */

let mySurname = "Flintstone";
console.log(`Declared let mySurname ${mySurname}`);
// Try uncommenting the next line which redeclares mySurname in the same block
// let mySurname = "Rubble";

mySurname = "Rubble";
console.log(`Reassigned let mySurname ${mySurname}`);
