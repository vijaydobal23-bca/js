

let container = document.getElementsByClassName("container");
console.log(container)

for(let i=0;i<container.length;i++){
  container[i].innerHTML = "Hello"+ i;
}
 //cant use for each
// container.array.forEach(element => {
//   console.log(element)
// });


let div = document.getElementById("div")
div.innerHTML = "Good mornign";


//query selector all ->we can use the for each here

let containers = document.querySelectorAll(".container");
console.log(containers)

containers.forEach((el)=>{
  el.style.backgroundColor ="pink";
})

//dom manupulation is here 

//inner text and html is here 
//we can use directly with single element

div.innerHTML = "<h1>Hello world</h1>"
console.log(div.tagName)

let box = document.querySelector(".box");
console.log(box.innerText);
 
box.innerText = "hello world";
console.log(box.innerHTML);

let box2 = document.querySelector(".box2");
console.log(box2.innerHTML)

//accesing child

//nodelist

let parent = document.querySelector(".parent");
let nodes = parent.childNodes;
console.log(parent.childNodes)

// in node list only forEach works map methos not works ->

nodes.forEach((node)=>{
  console.log(node);
})


//first child==> and first child element
  console.log(parent.firstChild);
console.log(parent.firstElementChild.innerText)


//last child 
console.log(parent.lastElementChild)
console.log(parent.lastChild)



//accessing attriutes using js 

console.log(parent.getAttribute('class'))
parent.setAttribute("id","Myid")


