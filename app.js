const myLibrary = [];

function Book(title,author,pages,read) {
  this.title =title,
  this.author= author,
  this.pages = pages,
  this.read = read
  this.bookInfo = function(){
   return `${title} by ${author}, ${pages} pages, ${read ? "read ":"not read yet"}`
  }
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
  const book1 = new Book('shahuls books',"shahul",189,false)
  myLibrary.push(book1)
  console.log(myLibrary)
  console.log(book1.bookInfo())
}
addBookToLibrary()
