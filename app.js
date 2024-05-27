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

const Book1 = new Book(
  (title = "The Hobbit"),
  (author = "J.R.R. Tolkien"),
  (pages = "295"),
  (read = "not read yet")
);
console.log('jello')

console.log(Book1.bookInfo());
