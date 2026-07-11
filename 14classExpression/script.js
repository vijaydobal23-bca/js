let p = new person();
class person{
  constructor(){
    console.log("Hello world");
  }
}
//let obj = new animal("Tiger","Lion");
let animal = class{ 
  constructor(a,b){
    this.a = a;
    this.b = b;
  }
}

let obj = new animal("Tiger","Lion");
//console.log(obj.a , obj.b)const obj = new Person(); // ❌ Error


if  i make a claass like this
const obj = new person();
class person{
  constructor(){
    console.log("Hello world")
  }
}

then is will become like that wit the concept of hoisting 

class person{
  constructor(){
    console.log("Hello world")
  }
}

const obj = new person();

