// typeof operators


// data type (primitive data types
// strubg " vikram"
// number 1, 2, 3 , 4
// Boolean
// undefined
// null
// BigInt
// Symbol

let age =25 ;
let firstName = "vikram";

console.log(typeof(age));
console.log(typeof(firstName));

// ==convert number to String

console.log(typeof(age + ""));


// ==convert string to number

let myStr = + "25";
console.log(typeof(myStr));



// ==undefined

let NewSrting;

console.log(typeof(NewSrting));

var NewSrting1;

NewSrting1 = "23";

console.log(typeof(NewSrting1));


// ==null

let myVarible = null;

console.log(myVarible);

myVarible = "vikram";

console.log(myVarible, typeof(myVarible));

console.log(typeof(null));  // out is objest its means there is an error

//  == BigInt

let myNumber = BigInt(914);
let mySameNumber  = 123n;  // we can also use BigInt like n symbol
console.log(mySameNumber);
console.log(myNumber + mySameNumber);
console.log(myNumber);
console.log(Number.MAX_SAFE_INTEGER);

