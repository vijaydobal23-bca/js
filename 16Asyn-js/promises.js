    //callback hell is here
  const prom = getPromise();
  prom.then((data)=>{
    console.log(data);
    return new Promise((resolve, reject) => {
      resolve("Second promise is resolved")
    })
  }).then((data)=>{
    console.log(data)
    return new Promise((resolve, reject) => {
      reject("Rejected")
    })
  }).catch((err)=>{ 
    console.log(err);
  })


//promises in js

const getPromise = ()=>{
  return new Promise((resolve , reject)=>{
    setTimeout(()=>{
      resolve("Rresolved sucessfylly")
    },2000);
  })
}


let promise = getPromise();
promise.then((data)=>{
  console.log(data);
}).catch((err)=>{ 
  console.log(err);
})

console.log(promise)

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json(); // convert to JSON
  })
  .then((data) => {

    // data is an array of users
    for (let i = 0; i < 5; i++) {
      console.log(data[i].name);
    }
  })
  .catch((error) => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Request completed");
  });







  //async await here
  async function abcd(){
    return "Hello world"
  };

  abcd().then((data)=>{
    console.log(data)
  })

  //await keyword in js
function getPromises() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is the end"); 
    }, 2000);
  });
}

async function HandleAsync() {
  let prom = await getPromises();
  console.log("Output of promise");
  console.log(prom);
  return "TAsync function always returns a peomise"
}

HandleAsync().then((data)=>{
  console.log(data)
});

// settimepi and setinterval in js
setTimeout(()=>{
  console.log("set timeout is working")
},3000)

//setInterval is here
let count = 1;
const timer = setInterval(()=>{
  console.log(count);
})