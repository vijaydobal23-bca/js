class student{

  #private = 0;
 
  // constructor(){
  //   this.a = 10;
  //   this.b = 20;
  // }
  constructor(a , b, c){
    this.a= a;
    this.b = b;
    this.c = c;
  }

  print(){
    console.log(this.a);
    console.log(this.b);
    console.log(this.c);
    console.log("Private variable",this.#private)
  }
}

let obj = new student();


const obj2 = new student(101,102,103)
obj2.print();

//prototype in oops for classe and objects in js


// this keyword in js 

console.log("This keyword")
function abcd(){
  console.log(this);
}
abcd()
console.log(this);

let object ={
  name:"vijay",
  print:function(){
    console.log(this.name);
  },

  display:()=>{
    console.log(this)
  }
}

object.print();
object.display();

const fun = ()=>{
  console.log("this from arrow")
  console.log(this)
}

fun()