/*
Arrow functions vs normal functions
*/

let normalFunction = function() {
    //I am a normal function
}

let arrowFunction = () => {
    // I am an arrow funciton
}

/*
Lexical scope of arrow functions:

Arrow functions inherit the value of this
from the scope enclosing them.

This means that the context is preserved.
*/

/*
Normal nested function creates new lexical scope.
"this" does not point to objec anymore.

Bound nested function has context bound to myObject.
Context is bound to "this" of object.

Arrow function does not create new context for "this".
"this" is inherited from enclosing function.
Enclosing function is method of myObject,
therefore "this" points to myObject.
*/
let myObject = {
    a: "value of myObject.a",
    self: this,
    getA: function() {
        return (function () {return this.a})();
    },
    getBoundA: function() {
        return (function () {return this.a}.bind(myObject))();
    },
    getArrowA: function() {
        return (() => {return this.a})();
    }
}

/*
Arrow function as direct method does inherit context from enclosing
lexical scope, which as of this point is NOT mySecondObject.
*/
let mySecondObject = {
    a: "value of mySecondObject.a",
    getA: () => {
        return this.a;
    }
}

function printA () {
    console.log("Normal function nested in method: ",myObject.getA());
    console.log("Normal function nexted bound to object",myObject.getBoundA());
    console.log("Arrow funciton nested in method: ",myObject.getArrowA());
}

function printSecondA () {
    console.log("Arrow function as method without another enclosing method: ",mySecondObject.getA());
}

printA();
console.log("\n");
printSecondA();