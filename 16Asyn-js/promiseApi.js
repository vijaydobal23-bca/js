const prom1 = ()=>{
  return  new Promise((resolve, reject) => {
  setTimeout(()=>{
    resolve("Promise 1 resolved")
  },1000)
})
}

const prom2 = ()=>{
  return new Promise((resolve, reject) => {
  setTimeout(()=>{
    resolve("Promise 2 resolved")
  },2000)
})
}

const prom3 = ()=>{
  return new Promise((resolve, reject) => {
  setTimeout(()=>{
    resolve("Promise 3 resolved")
  },300)
})

}

Promise.all([prom1() , prom2() , prom3()]).then((res)=>{
  
  console.log(res)
}).catch((err)=>{
  console.log(err)
})

Promise.race([prom1() ,prom2() , prom3()]).then((res)=>{
  console.log("race winner is ")
  console.log(res)
}).catch((err)=>{
  console.log(err)
})
