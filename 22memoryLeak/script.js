let count = 0;
const int = setInterval(()=>{
  if(count<10){
    count++;
    console.log(count);
  }

  else{

    console.log(count);
    clearInterval(int);
  }
},500);