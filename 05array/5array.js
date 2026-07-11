//arrays in java script 

//array creation and declaration 

var arr = [];
let arr2 = [1,3,"hello",true,{name:"vijay"},()=>{console.log("hello")}];

console.log(arr2);
for(nums of arr2){
  console.log(nums)
}

var arr = new Array(1,2,3,3,4,5);
console.log(arr)
// array methods in js 

var arr= [1,2,3,4,5];
arr.push(6);

console.log(arr);
arr.pop();
console.log(arr);

arr.shift()
console.log(arr);

arr.unshift(0);
console.log(arr);

console.log(arr.indexOf(3));

var newArr = arr.join("-");
console.log(newArr);

newArr = arr.reverse();
console.log("Reversed array is " , newArr);

newArr = arr.slice(1,4);
console.log(newArr);
console.log("Splice method is")

console.log(arr.includes(3));



arr.splice(-1,1);
console.log(arr)


//filter methods in array

arr = [1,2,3,4,5,6,7]

newArr = arr.filter((val)=>{
  return val>3
});

console.log(newArr);
//reduce metod

newArr = arr.reduce((acc,val,idx,Arr)=>{
  console.log(idx)
    return acc+val;
})

console.log(newArr);

//map method ->
newArr = arr.map((val,index ,arr)=>{
  return val+2;
})

console.log(newArr);

//some method 
var arr = [1,2,3,4,5];
var str = "hello1";
arr = [...str];
console.log(arr)

var ans = arr.some((val)=>{
  return (val>='0' && val<='9');
})

console.log(ans);

//every method 

arr = [-1,2,3,4,5];
ans = arr.every((val)=>{
  return val>=0
})

console.log(ans);









