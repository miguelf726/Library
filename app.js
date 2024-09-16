const dialog = document.getElementById("dialog")
const addBook = document.querySelector('.add-btn')
const closeModal = document.querySelector('.close-btn')

const myLibrary = []

console.log(myLibrary)
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.bookInfo = function () {
    return (
      this.title +
      " by " +
      this.author +
      ", " +
      this.pages +
      " pages, " +
      this.read
    );
  };
}



function addBookToLibrary(){
    const Book1 = new Book(
        (title = "The Hobbit"),
        (author = "J.R.R. Tolkien"),
        (pages = "295"),
        (read = "not read yet")
      );
      
      console.log(Book1.bookInfo());
      
myLibrary.push(Book1)
}

addBookToLibrary()


function displayBook() {
const bookContainer = document.querySelector('.book-container')
console.log(bookContainer)


let booksHTML = myLibrary.map((book)=>{
  return `<div class="book-info">
            <h3 class="book-title">${book.title}</h3>
            <p class="book-author">${book.title}</p>
            <p class="book-pages">${book.title}</p>
            <p class="book-status">${book.title}</p>
        </div> `
})

bookContainer.innerHTML= booksHTML

}
displayBook()

addBook.addEventListener('click', ()=>{
  dialog.showModal()
})

closeModal.addEventListener('click', ()=> {
  // e.preventDefault()
  dialog.close()
})