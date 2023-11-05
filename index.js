const bookUl = document.querySelector("ul");
const newBookButton = document.querySelector("#newBook");
const addBookButton = document.querySelector("#addBook");
const dialog = document.querySelector("dialog");
const newBookForm = document.querySelector("#newBookForm");

const NOT_STARTED = "not-started";
const IN_PROGRESS = "in-progress";
const COMPLETED = "completed";
const ABANDONED = "abandoned";

const myLibrary = [
  {
    title: "Love Sense",
    author: "Dr. Sue Johnson",
    readingStatus: IN_PROGRESS,
  },
  {
    title: "Hold Me Tight",
    author: "Dr. Sue Johnson",
    readingStatus: NOT_STARTED,
  },
  {
    title: "Rich Dad, Poor Dad",
    author: "David Kamasaki",
    readingStatus: IN_PROGRESS,
  },
];

function Book(title, author, readingStatus) {
  this.title = title;
  this.author = author;
  this.readingStatus = readingStatus;
}

function addBookToLibrary(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const readingStatus = document.getElementById("readingStatus").value;

  const book = new Book(title, author, readingStatus);

  myLibrary.push(book);

  dialog.close();
  displayBooks(myLibrary);

  newBookForm.reset();
}

function displayBooks(books) {
  bookUl.innerHTML = "";
  books.forEach((book) => {
    const li = document.createElement("li");
    li.textContent = `${book.title} - by ${book.author} - ${book.readingStatus}`;
    bookUl.append(li);
  });
}

function showBookForm(e) {
  e.preventDefault();
  dialog.show();
}

displayBooks(myLibrary);

newBookButton.addEventListener("click", showBookForm);
addBookButton.addEventListener("click", addBookToLibrary);
