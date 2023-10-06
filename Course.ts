/* string is all lowercase 
Can't reassign to a different type:
 let mystring: string = 'Is Great';
 mystring = 100;
*/
// Declaring a string in JS 
const MyVariable = 'Is Great';
// Declaring a string in TS
const MyVariable: string = 'Is Great';
/* Numbers work the same way in JS
Can't reassign to a different type:
let myNumber: number = 42;
myNumber = "Cannot change myNumber"*/
// Declaring a number in TS
const MyNumber: number = 42;
// Declaring a number in JS
const MyNumber = 42;
/* Can't reassign to a different type:
let myBoolean: boolean = true;
myBoolean = 56;
Can reassign to a different value of the same type:
myBoolean = false;
*/
// Declaring a Boolean in TS
const MyBoolean: boolean = true;
// Declaring a Boolean in JS
const MyBoolean = true;