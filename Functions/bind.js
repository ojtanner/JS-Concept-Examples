/*
You can bind functions (excluding arrow functions)
to a chosen context to determine where "this" points to.
*/

let myObject = {
    a: "the value of myObject.a"
}

function getA () {
    return this.a;
}

let myBoundFunction = getA.bind(myObject);

console.log("The unbound getA: ", getA());
console.log("The getA bound to myObject: ", myBoundFunction());
