var obj = new Object();

obj = {
  name: {
    first: "Gandalf",
    last: "the Grey",
  },
  address: "Middle Earth",
};

// console.log(obj);
function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;

  this.printPages = function () {
    console.log(this.pages);
  };
}

var book = new Book(
  "Javascript - Estrutura de Dados e Algoritmos",
  406,
  "isbn"
);

Book.prototype.printTitle = function () {
  console.log(this.title);
};

console.log(book.printTitle());
console.log(book.printPages());
