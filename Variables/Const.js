"use strict";

/**
 * Const has the same scope as Let !!!
 * Const prohibits change of reference once initialized.
 */

/**
 * Const Primitive Types are final
 * Reason is that primitive types always change reference
 * when new value is assigned
 */

const primitiveValue = 5;

try {
    primitiveValue = 6;
}
catch (error) {
    console.log(error);
};

/**
 * Const Objects are not final
 * Reason is that objects can change content 
 * whitout changing reference
 */

 const constObject = {
     value: 'Im the initial value.'
 };

 constObject.value = '\nIm the modified value. I dont throw errors!';

 console.log(constObject.value)

 /**
  * Same with Arrays ( Arrays are Objects in JavaScript ).
  */

  const constArray = ['a', 'b', 'c'];

  constArray.push('d');

  console.log('Printing the modified array: \n', constArray);