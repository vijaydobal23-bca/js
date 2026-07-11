const div = document.querySelector("div");


div.onclick = function(){
  console.log("div is clicked 1");
}

div.onclick = function(){
  console.log("Div is clicked 2")
}


div.addEventListener("click" , ()=>{
  console.log("Clicked Event listener")
})