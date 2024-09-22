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

addBook.addEventListener("click", () => {
  dialog.showModal();
});

closeModal.addEventListener("click", () => {
  dialog.close();
});

function addBookToLibrary() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").value;

  console.log(read.value);

  myLibrary.push(new Book(author, title, pages, read));
}

submitBook.addEventListener("click", (e) => {
  if (
    document.querySelector("#title").value != "" &&
    document.querySelector("#author").value != "" &&
    document.querySelector("#pages").value != ""
  ) {
    e.preventDefault();
    addBookToLibrary();
  }
displayBook()

  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#pages").value = "";
  dialog.close();
});

function displayBook() {
  const library = document.querySelector(".library");
  const book = document.createElement("div");
  book.className = "book-container";
  const checkbox = document.createElement('input')
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = document.querySelector("#read").checked;

  library.appendChild(book)



  book.innerHTML=myLibrary.map((book) => {
  return( `<h3>Title:</h3>
                    <p class="book-title">${book.title}</p>
                    <h3>Author:</h3>
                    <p class="book-author">${book.author}</p>
                    <h3>Pages:</h3>
                    <p class="book-pages">${book.pages}</p>
                    <h3>Read:</h3>
                    `
                  );
  });

  book.appendChild(checkbox);


}
