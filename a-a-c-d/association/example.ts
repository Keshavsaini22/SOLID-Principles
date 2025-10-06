//UNI DIRECTIONAL ASSOCIATION

class Driver {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Car {
  private driver: Driver;

  constructor(driver: Driver) {
    this.driver = driver;
  }

  drive() {
    console.log(`${this.driver} is driving the car.`);
  }
}

const d = new Driver("John Doe");
const c = new Car(d);
c.drive();

//BI DIRECTIONAL ASSOCIATION

class Author {
  private name: string;
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
    book.setAuthor(this); // Set the reverse association
  }
}

class Book {
  private title: string;
  private author: Author;

  setAuthor(author: Author): void {
    this.author = author;
  }
}

const author = new Author();
const book = new Book();
author.addBook(book);

// Car ───────→ Driver           Unidirectional
// Author ───────↔────── Book    Bidirectional
