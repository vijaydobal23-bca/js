// variable declaration 
let a = 10;
const b = 20;
var c = 20;

console.log(a);
console.log(b);
console.log(c);


{
  // error will be here ->hoisting console.log(a);
  let a = 23; //let is block scope
  console.log(a);

}

{ //block scope
  var d = 10; // global scope
  console.log(d);
}

console.log(d);


//hoisting

console.log(x); //ans is undefind
var x =10;


//temporal dead zone 
console.log(y); // reference error here
let y =44;

