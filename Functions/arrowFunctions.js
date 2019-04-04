/**
* Arrow functions
*/

/*
===================================================
Section 1: Syntax
===================================================
*/

console.log('\nSection 1:\n');

let myFunction;

//1.1) Standard function w/o return statement

myFunction = function (/* parameters */) {
	/* 
    function-body

    if you omit the return statement
    in a standard function,
    the return value will be of type
    "undefined".
    */
};

console.log('1.1) Standard function w/o return statement:', myFunction());

//1.2) Standard function

myFunction = function (/* parameters */) {
	/*
    function-body
    */

	return 'explicit return value';
};

console.log('1.2) Standard function:', myFunction());

//1.3) Arrow function general form

myFunction = (/* parameters */) => {
	/*
    multi-line function-body

    If you have a multi-line function-body
    in your arrow function,
    your return value has to be set explicitly.
    */

	return 'arrow function explicit return value';
};

console.log('1.3) Arrow function general form:', myFunction());

//1.4) Arrow function short form

myFunction = (/* parameters */) => 'one-line implicit return value';
/* 
    single-line function-body

    If you have a single-line function-body
    in your arrow function,
    the return value will be implicitly set 
    to the expression contained on 
    the single-line function-body.
    */

console.log('1.4) Arrow function short form:', myFunction());

//1.5) Arrow function single parameter form

myFunction = parameter => {
	/*
    single-parameter form

    If your arrow function only has one
    parameter, you can omit the 
    round brackets.

    This form is also compatible with the 
    one-line function-body.
    */

	return parameter;
};

console.log('1.5) Arrow function single parameter form:', myFunction('single parameter'));

/*
===================================================
Section 2: Execution context and "this"
===================================================
*/

console.log('\nSection 2:\n');

let myObject = {
	value: 'object value'
};

//2.1) Standard functions

myFunction = function () {
	/*
    Standard functions get their execution context
    from the calling object.

    This function gets called with "this" set
    to myObject.
    */
	return this.value;
};

console.log('2.1) Standard functions:',myFunction.call(myObject));

//2.2) Arrow functions

myFunction = () => {
	/*
    Arrow functions do NOT get their execution
    context from the calling object.

    Rather, they get the execution context from
    the lexical scope they where written in.

    Here, the arrow function is written in the
    lexical scope of the global object.
    Even if we call it with .call(myObject),
    "this" is already set to the global object.
    */
	return this.value;
};

console.log('2.2) Arrow functions:',myFunction.call(myObject));

//2.3) Standard functions as methods

myObject = {
	value: 'object value',
	myMethod: function () {
		/*
        We define a method for myObject.
        The execution context and lexical scope
        of this method will always(*1) set "this"
        to the object that calls the method.
        In this case, myObject.
        */
		return this.value;
	}
};

console.log('2.3) Standard functions as methods:',myObject.myMethod());

//2.4) Arrow functions as methods

myObject = {
	value: 'object value',
	myMethod: () => {
		/*
        This does not work!

        The lexical scope here is still the 
        global object! Therefore, the arrow
        function is still bound to the global 
        object and not myObject.
        */
		return this.value;
	}
};

console.log('2.4) Arrow functions as methods:',myObject.myMethod());

//2.5) Arrow functions and bind

myObject = {
	value: 'object value',
	myMethod: (() => {
		/*
        This does not work!

        Arrow functions can not be
        re-bound.
        */
		return this.value;
	}).bind(myObject)
};

console.log('2.5) Arrow functions and bind:',myObject.myMethod());

//2.6) Arrow functions inside standard functions

myObject = {
	value: 'object value',
	myMethod: function() {
		let myValue;
		(() => {
			/*
            Here the lexical scope of the arrow function
            is the outer function. 
            Since the outer function is a standard function
            used as a method, its "this" is always set to myObject.
            Therefore, the arrow function inherits "this" set to myObject
            from the enclosing standard function.

            We define a funcion expression and inmediatly invoke it.
            Also known as the good old IIFE.
            */
			myValue = this.value;
		})();
		return myValue;
	}
};

console.log('2.6) Arrow functions inside standard functions:', myObject.myMethod());

/*
===================================================
Section 3: Misc
===================================================
*/

//TODO:

//Arrow functions do not work as constructors and "new"

//Arrow functions can not be set to an object via .prototype