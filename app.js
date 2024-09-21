const dialog = document.getElementById("dialog");
const addBook = document.querySelector(".add-btn");
const closeModal = document.querySelector(".close-btn");
const submitBook = document.querySelector(".submit-book");

const myLibrary = [];

console.log(myLibrary);
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

function addBookToLibrary() {
  // const Book1 = new Book(
  //     (title = "The Hobbit"),
  //     (author = "J.R.R. Tolkien"),
  //     (pages = "295"),
  //     (read = "not read")
  //   );
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").value;

  console.log(read.value);

  myLibrary.push(new Book(author, title, pages, read));

  //   console.log(Book1.bookInfo());

  // myLibrary.push(Book1);
}


submitBook.addEventListener("click", (e) => {
  if (
    document.querySelector("#title").value != "" &&
    document.querySelector("#author").value != "" &&
    document.querySelector("#pages").value != ""
  ) {
    e.preventDefault();
    addBookToLibrary();
    displayBook()
  }
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#pages").value = "";
  dialog.close();
});

function displayBook() {
  const library = document.querySelector(".library");

  let booksHTML = myLibrary.map((book) => {
    return `
         <div class="book-container">
                <div class="book-info">
                    <h3 class="book-title">${book.title}</h3>
                    <p class="book-author">${book.title}</p>
                    <p class="book-pages">${book.title}</p>
                    <p class="book-read">${book.title}</p>
                </div>
            </div>`;
  });

  library.innerHTML = booksHTML;
}

addBook.addEventListener("click", () => {
  dialog.showModal();
});

closeModal.addEventListener("click", () => {
  // e.preventDefault()
  dialog.close();
});

console.log(myLibrary);
