// 1 createing a function here
function abc() {
  console.log("I am a function here");
}

abc();

function abcd(name, age, email) {
  console.log(name, age, email);
  console.log(arguments[0]);
}

abcd("vijay", 10, "vijay@123.com");

// sayHello(); // ❌ Error

// var sayHello = function() {
//   console.log("Hello");
// };

// let sayHello = ()=>{
//   console.log("Hello world");
// }

//2parameters and agruments

// rest parameters
function myFun(a, b, ...c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

myFun(10, 20, 40, 50, 5060);

//destructured parameter
function hello({ name, age }) {
  console.log(name, age);
}

hello({ name: "vijay", age: 18 });

// default parameters in js
function print(a = 0, b = 0) {
  console.log(a, b);
}

print(20);

//pisitionla argments
function show(a, b, c, d) {
  console.log(a, b, c, d);
}

show(10, 20, 30, 40);
show(10, 30, 40);

// 3 types of function in js

//classic function
function classic() {
  console.log("Classic function");
}

classic();

//nested function

function outer() {
  function inner() {
    console.log("Inner function");
  }

  inner();
}
outer();
//you can't call directly inner()

//scope chain in js
let i = 10;
function chain() {
  console.log(i);
  let b = 15;
  function inner() {
    console.log(b);
    console.log(i)
  }

  inner();
}

chain();



// iffe function in js

(function(){
  console.log("Instently invoked or exeuted")
})()
console.log("Function expressuin ")
//function expression
const fn = function myfunction(){
  console.log("Hello");
}

fn();
// myfunction();

//animous function 
function any(a,fnc){
  console.log("Going to call anynmous function");

  fnc();
}

any("vijay",()=>{
  console.log("Hello i am anymous function ")
})

//higher order function

function higher(fnc){
  console.log("heigher order function");
  fnc();  
  return function(){
    console.log("Returning function ");
  }
}

const retFunc = higher(()=>{
  console.log("Also a higher order function")
});
retFunc();

//pure function 
let check = 1;
function pure(val){
  console.log(val+2);
}

pure(4);

// impure funxtion in js

function impure(b){
  console.log("heyheyheyehyeheyeyh");
  a = 2;
  return a+b;
}

console.log(impure(4))

//function curring 
function add(a){
  return function(b){
    return function(c){
      return a+b+c;
    }
  }
}


let ans = add(1)(10)(3)
console.log(ans)