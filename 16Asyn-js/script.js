//callback functions
function abcde(callback){
  callback("hey")
}


abcde(function(ans){
  console.log(ans)
})


// how actully callback woks
const h1 = {
  data: "Hello world",
  addEventListener: function (eventName, callback) {
    setTimeout(() => {
      callback({ target: "<h1>hello</h1>" });
    }, 2000);
  }
};

h1.addEventListener("click", (e) => {
  console.log(e.target);
});

//callback hell

 function abcd(fn){
    fn(function(fn3){
        fn3();
    })
 }

 abcd(function(fn2){
     fn2(function(){
      console.log("Callback hell")
     })
 })


 

