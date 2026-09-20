const myLibrary = [];

function Book(title,author,pages,read) {
  this.title =title,
  this.author= author,
  this.pages = pages,
  this.read = read
  this.id = crypto.randomUUID()
  this.bookInfo = function(){
   return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read ":"not read yet"}`
  }
}

// function addBookToLibrary() {
//   // take params, create a book then store it in the array
//   const book1 = new Book('shahuls books',"shahul",189,false)
//   myLibrary.push(book1)
//   console.log(myLibrary)
//   console.log(book1.bookInfo())
// }
// addBookToLibrary()

const bookForm = document.getElementById('libraryForm')

bookForm.addEventListener("submit",function(event){
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value === 'true';
    const bookInLibrary = new Book(title,author,pages,read)
    myLibrary.push(bookInLibrary);
    bookForm.reset();
    console.log(myLibrary);
    
})
console.log(myLibrary)