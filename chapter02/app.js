import { circleArea, squareArea } from "./calc-area.js";

let movie = "Lord of the Ring";

function starWarsFans() {
  const movie = "Star Wars";

  return movie;
}

function marvelFan() {
  movie = "The Avangers";

  return movie;
}

function blizzardFan() {
  const isFan = true;
  let phrase = "Warcraft";

  console.log("Before if: " + phrase);

  if (isFan) {
    let phrase = "initial text";

    phrase = "For the Horde!";

    console.log("Inside if: " + phrase);
  }

  phrase = "For the Alliance";

  console.log("After if: " + phrase);
}

// console.log(movie);
// console.log(starWarsFans());
// console.log(marvelFan());
// console.log(movie);
// console.log(blizzardFan());

class Book {
  constructor(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
  }

  printIsbn() {
    console.log(this.isbn);
  }
}

let book = new Book("Learn JS", 234, "234A");

console.log(book);

class ITBook extends Book {
  constructor(title, pages, isbn, technology) {
    super(title, pages, isbn);

    this.technology = technology;
  }
}

// getter and setter
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

let anyPerson = new Person("Davi Silva");

// console.log(anyPerson.name);

console.log(circleArea(3));
console.log(squareArea(3));

let a;


