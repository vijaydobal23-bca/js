let input = document.querySelector("input");

function debounce(fn, delay) {
   let timer;
  return function () {
   
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn();
    }, delay);
  };
}

input.addEventListener(
  "input",
  debounce(function () {
    console.log("yepp");
  }, 1000),
);

//Throtlling in js

// function Throttle(fn ,delay){
//   let timer = 0;
//   return function (){
//     const now = Date.now();
//     if(now-timer>=delay){
//       timer = now;
//       fn();
//     }
//   }
// }

// window.addEventListener("mousemove" , Throttle(function(){
//   console.log("Anunhav")
// },500))
