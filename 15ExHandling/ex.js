try{
  console.log(a)
}catch(err){
  console.log("erroe occurred",err.message)
}finally{
  console.log("Runs always")
}


try{
  throw new Error("Error occured using theow")
}catch(e){
  console.log(e.message)
}

try {
  age = 0;
  if(age<=0){
    throw "Error occured this is a normal error in js"
  }
}

  catch(err){
    console.log(err)
  }



  class myErr extends Error{
    constructor(message){
      super(message);
      this.message = message;
      this.name = "Custom Error"
    }
  }

  try{
    throw new myErr("Error occured by vihay")
  }catch(err){
    console.log(err.message);
  }
