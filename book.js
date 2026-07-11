class Books {
  static bookCount = 0;
  static books = [];

  constructor() {}

  addBooks(name, price, stock) {
    let newBook = {
      name,
      price,
      stock,
    };
    Books.books.push(newBook);
  }

  showBooks = () => {
    console.log(Books.books);
  };

  buyBooks(name,price){
    let found = false;

    Books.books.forEach((obj)=>{
      if(obj.name ==name){
        console.log(obj.name)
        found = true;
      }

      if(!found){
        console.log("Book not Found")
      }
    })

    console.log(found)
    
  }
}

let b = new Books();
b.addBooks("Honey book", "2", 10);
b.addBooks("jungle Book", "200", 5);
b.buyBooks("jungle Book" ,"200")

console.log(b.showBooks());
