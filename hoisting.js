// VARIABLES IN JS ->
// A variable is a name of a memory location that stores a value or reference

// VARIABLE DECLARATION ->
// We can declare variables using: var, let, const

let a;
var b;
const c = 10; // const must be initialized


// DIFFERENCE BETWEEN var, let, const ->

// var ->
// - Function scoped (NOT block scoped)
// - Ignores {} blocks
// - Can be redeclared and updated
// - Attached to window object (in global scope)
// - Hoisted and initialized with undefined (NO TDZ)


// let ->
// - Block scoped
// - Cannot be redeclared in same scope
// - Can be updated
// - Not attached to window object
// - Hoisted but NOT initialized (TDZ applies)


// const ->
// - Block scoped
// - Cannot be redeclared or updated
// - MUST be initialized at declaration
// - Not attached to window object
// - Hoisted but NOT initialized (TDZ applies)


// EXAMPLES ->

{
  var x = 10;
}
console.log(window.x); // ✅ 10 (var ignores block)

{
  let a2 = "vijay";
}
// console.log(a2); ❌ ReferenceError (block scoped)

function abcd(){
  var p = "Print";
}
// console.log(p); ❌ ReferenceError (function scoped)


// window object behavior
let na = "Vijay";
console.log(window.na); // ❌ undefined


// HOISTING & TDZ ->

// Hoisting = declaration moved to top of scope

// var hoisting
console.log(chacha); // ✅ undefined
var chacha = "Jatin";


// let / const hoisting (TDZ)
console.log(bubu); // ❌ ReferenceError
let bubu = "My bbib";


// TDZ ->
// Time between entering scope and variable declaration