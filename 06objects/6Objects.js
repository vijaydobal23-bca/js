//objects in java script
// creating an object

var obj = { name: "vijay", age: "19" };
console.log(obj);

obj = new Object();
obj.name = "Amit Pal";
console.log(obj);

// object destructuring

obj = { name: "vijay", age: "18" };
let { name, age } = obj;
console.log(name, age);

//ways to access
console.log(obj.name);
console.log(obj["age"]);

var key = "name";
console.log(obj.key); //undefined here because ->there is no any "key" inside obj
console.log(obj[key]);

// metods

console.log(Object.keys(obj));
console.log(Object.entries(obj));
console.log(Object.values(obj));

// destructuring
obj = { name: "vijay", age: "18",
  address:{
    city:"Haldwani",
    pin:111,
  }
};

let {address:{city , pin}} = obj;
console.log(city,pin)