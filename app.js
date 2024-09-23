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

  // this.bookInfo = function () {
  //   return (
  //     this.title +
  //     " by " +
  //     this.author +
  //     ", " +
  //     this.pages +
  //     " pages, " +
  //     this.read
  //   );
  // };
}

addBook.addEventListener("click", () => {
  dialog.showModal();
});

// closeModal.addEventListener("click", () => {
//   dialog.close();
// });

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
    displayBook();

    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#pages").value = "";
    dialog.close();
  }
});

function displayBook() {
  const library = document.querySelector(".library");
  const bookInfo = document.createElement("div");
  const checkbox = document.createElement("input");
  const deleteBtn = document.createElement("button");

  bookInfo.className = "book-container";
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = document.querySelector("#read").checked;
  checkbox.className= 'checkbox'
  deleteBtn.className=" btn delete-btn";
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", () => {
    deleteBtn.parentElement.remove();
  });

  library.append(bookInfo);

  for (let book in myLibrary) {
    bookInfo.innerHTML = `  <h3>Title:</h3>
<p class="book-title">${myLibrary[book].title}</p>
<h3>Author:</h3>
<p class="book-author">${myLibrary[book].author}</p>
<h3>Pages:</h3>
<p class="book-pages">${myLibrary[book].pages}</p>
<h3 class='read-title' >Read:</h3>`;
    bookInfo.appendChild(checkbox);
    bookInfo.appendChild(deleteBtn);
  }
}
