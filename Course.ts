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
//Type inference makes Typescript the goat
let tvshow = 'Game of Thrones';
tvshow = 'Breaking Bad';
// Notice how TS is smart enough to know that the type is a string.
// any can be used a shield to types, although it is not recommended.
let myString: any = 'Is Great';
const movies = ['Game of Thrones', 'Breaking Bad', 'The Lord of the Rings'];
let foundMovie; // Any type



for(let movie of movies){
  if(movie === 'Game of Thrones'){
    foundMovie = 'Game of Thrones';
    // FoundMovie is now of type 'Game of Thrones'
    // also can also be number, string, boolean, array, object, etc.