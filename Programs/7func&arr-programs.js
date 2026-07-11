// 1)use rest parameters to make a function that adds unlimitesnumbers

// methods->reduce , for loop ,forEach , map method



function rest(...rest){
  let sum = 0;
  for(let i = 0;i<rest.length ; i++){
      sum+=rest[i];
  }
  return sum;
}

var ans = rest(1,2,3,4,5,6);
console.log(ans);


//create an object and print eact keys and values

var obj = {
  name:"vijay",
  age:"18",
  cgpa:"8.65",
}

for(key in obj){
  console.log(key , " => " ,obj[key]);
}
console.log(Object.entries(obj))


//create one pure function that always returens the same output for given input and one impure function using a global variable


function pure(a , b){
  return a+b;
}
console.log(pure(10,20));

var x =10;
function impure(a,b){
  x++;
  return a+b+x;
}
console.log(impure(10,20));


// write a function that ises object destructuring inside parameters to extract and print name and age . 


function destructuring({name , age}){
  console.log(name , age);
}
var obj = {name:"vijay",age:"8"};
destructuring(obj)

//Demonstrate the difference between normal function and arrow function when uses aas object method 


var obj = {
  name:"Harsh",
  func:function(){
    console.log("This form the normal function")
    console.log(this);
  },

  func2:()=>{
    console.log("This form arrow function")
    console.log(this)
  }
}

obj.func();
obj.func2()

//use filter to get only even numbers from an array.

var arr = [1,2,3,4,5,6,6,7];
var even = arr.filter((val , idx , array)=>{
  return val%2==0;
})

console.log(even)

//use reduce to find total salary form an array ov numbers

var arr = [3000,4000,5000];
var ans = arr.reduce((acc , val ,idx ,array)=>{
  return acc+val;
},0);

console.log(ans);

//figer out the number form the strings

var str = "hello2World";
arr = [...str];

ans = arr.filter((val)=>{
  return (val>='0' && val<="9")
})
console.log(ans)

// check if any number is present in a string

ans = arr.find((val)=>{
  return (val>=0 && val<=9)
})

console.log(ans)

//create an array of names and use some and every to test a conditiion(all names longer than3 chars)


var names = ["Dhaneshwar","om","shanti","ali"];
ans = names.some((val)=>{
  return val.length >=3;
})

console.log(ans);


// create an object user ans test the behaviour of object ->freeze() , object.seal() by adding/chainging keys.

var user =  {
  name:"harsh",
  age:27,
  email:"h@g.com"
}

console.log(Object.freeze(user));
user.name = "amit"; // object is freeze cant change the vales 

Object.seal(obj);
// only update the value cant add the another key

user.name = "Pankaj";
console.log(user);


var arr = [1,2,3,4,[23,10] , [13,19]]
console.log(arr[4][0])





