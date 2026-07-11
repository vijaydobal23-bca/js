// call
let obj = {
  name:"Harsh",
}
function abcd(a){
  console.log(this);
  console.log(a)
}

abcd.call(obj,20);

//apply method

const user = {
  name: "Vijay"
};

function greet(age, city) {
  console.log(`Hello ${this.name}, age ${age}, city ${city}`);
}

greet.apply(user, [21, "Delhi"])


//bind  method
 function print(a,b){
  console.log(this);
  console.log(a+b)
 }

 let newFun = print.bind(user,20,20);
 newFun()