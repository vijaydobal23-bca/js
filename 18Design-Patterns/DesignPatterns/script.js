// module patterns

let fnc = (function(){
  let bankBalance = 12000;

  function checkBankBalance(){
    console.log(bankBalance);
  }

  function setBalance(val){
    bankBalance = val;
  }


  function withdraw(val){
    if(val<=bankBalance){
      bankBalance -=val;
      console.log(bankBalance);
    }
  }

  return {
    getBalance:checkBankBalance ,
    addBalance:setBalance , 
    with:withdraw
  }
})();

fnc.addBalance(1221);
fnc.getBalance()



// module reaveling paterns

let Bank = (function(){
  let bankBalance = 12000;

  function checkBankBalance(){
    console.log(bankBalance);
  }

  function setBalance(val){
    bankBalance = val;
  }


  function withdraw(val){
    if(val<=bankBalance){
      bankBalance -=val;
      console.log(bankBalance);
    }
  }

  return {
    checkBankBalance ,
    setBalance , 
    withdraw
  }
})();

Bank.setBalance(1)
Bank.checkBankBalance();

// factory function pattern

function createProducts(name, price){
  let stock = 10;


  return {
    name,
    price,

    checkStock(){
      console.log(stock);
    },

    buy(qty){
      if(qty <=stock ){
        stock -= qty;
        console.log(`${qty} booked - ${stock} pieces left`);
      }

      else{
        console.error(`Out of Stock ${stock} left`)
      }
    },

    refill(qty){
      stock+= qty;
      console.log(`regilled the stock - ${stock} pieces now`)
    }
  }

}

let apple = createProducts("iphone" , 70000)
apple.buy(3)


//  observer patterns

class YoutubeChannel{
  constructor(){
    this.subscriber = [];
    
  }

  subscribe(user){
    this.subscriber.push(user);
    user.update("You have subscribed")
  }

  unsubscrube(user){
    this.subscriber.filter((sub)=> sub!== user);
    console.log("you have unsubscribed the channel")
  }

  notify(message){
      this.subscriber.forEach((sub)=> sub.update(message))
  }
}


 class User{
    constructor(name){
      this.name = name;
    }

    update(data){
      console.log(data)
    }
  }

  let sheryiansh = new YoutubeChannel();
  let user1 = new User("Vijay");
  let user2 = new User("Harsh")

  sheryiansh.subscribe(user1)
  sheryiansh.subscribe(user2)
  sheryiansh.notify("video uploaded")




