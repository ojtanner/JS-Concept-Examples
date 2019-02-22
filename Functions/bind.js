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


/*
You can also pass optional arguments which will
be applied to the function.
*/

let mySecondObject = {
    a: 10
}

function addNumbers (...numbers) {
    return numbers.reduce(
        (prev, curr) => prev + curr,
        parseInt(this.a)
        );
}

let add10 = addNumbers.bind(mySecondObject);

let add20 = addNumbers.bind(mySecondObject, 10);

console.log("Add 10 to 1: ", add10(1));
console.log("Add 20 to 1: ", add20(1));