let btn  = document.querySelector("button");
btn.addEventListener("click",async function(){
  const heavy = await import("./scrpt.js")
  heavy.heavyFunction();
})