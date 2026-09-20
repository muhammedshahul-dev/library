const myLibrary = [
  new Book("The Pragmatic Programmer", "Andy Hunt & Dave Thomas", 352, true),
  new Book("Clean Code", "Robert C. Martin", 464, true),
  new Book("JavaScript: The Good Parts", "Douglas Crockford", 176, false),
  new Book("You Don't Know JS Yet", "Kyle Simpson", 142, true),
  new Book("Eloquent JavaScript", "Marijn Haverbeke", 472, false)
];  

function Book(title,author,pages,read) {
  this.title =title;
  this.author= author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
  this.bookInfo = function(){
   return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read ":"not read yet"}`
  };
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
    DisplayBooks()
})
const tableBody = document.getElementById('libraryTableBody');
function DisplayBooks(){
    tableBody.replaceChildren();
    
    myLibrary.forEach((library,index) =>{
        const raw = document.createElement('tr')

        const titleCell = document.createElement('td')
        titleCell.textContent = library.title;
        raw.appendChild(titleCell)

        const authorCell = document.createElement('td')
        authorCell.textContent = library.author;
        raw.appendChild(authorCell);

        const pagesCell = document.createElement('td');
        pagesCell.textContent = library.pages;
        raw.appendChild(pagesCell);
        
        const statusCell = document.createElement("td")
        const readCell = document.createElement('button')
        readCell.textContent = library.read ? "read" : "not read";

        readCell.addEventListener('click', event =>{
            library.read = !library.read
            DisplayBooks()
        })
        statusCell.appendChild(readCell);
        raw.appendChild(statusCell);

        const deleteCell= document.createElement('td')
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent= 'delete';

        deleteBtn.className= 'delete-btn';
        deleteCell.className= 'delete-cell'
        deleteBtn.addEventListener('click',event =>{
            myLibrary.splice(index,1)
            DisplayBooks()
        })
        raw.appendChild(deleteCell)
        deleteCell.appendChild(deleteBtn)
        tableBody.appendChild(raw)


    })
    
}
DisplayBooks();