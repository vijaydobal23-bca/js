// //String declaration

// let name = "vijay";
// let str = 'vijay';
// let str2 = `vijay`;
// let strObj = new String("vijay");

// console.log(strObj);
// console.log(str2);
// console.log(strObj == str2);



var str = "hello";
console.log(str+"10")
console.log(str+[10])
console.log(str+{name:"vijay"});
console.log(str+true)
console.log(str+null)
console.log(str+undefined);

console.log("10"*{name:"vijay"});
var str = "Hello world";
console.log(str.length);
console.log(str.charAt(1));
console.log(str.at(-1));
console.log(str.indexOf("l"));
console.log(str.lastIndexOf("l"));

console.log(str.includes("H"));
console.log(str.startsWith("H"));
console.log(str.endsWith("world"));

console.log(str.slice(0,7));
console.log(str.slice(-1));

console.log(str.substring(1,4));

var str = "ab,cd";
console.log(str.split(","));
console.log(str.search("b"));
var str  = "hello"
console.log(str.substring(-1,3));

var str = "abcdenghijklmnopqrstuvwxyz";
for(let i = 0;i<str.length;i++){
console.log(str.charCodeAt(i));
}

console.log(str.match("abc"))
let ans = "hi";
ans+="lala";
console.log(ans.length);



