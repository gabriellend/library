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
  { title: "Love Sense", author: "Dr. Sue Johnson", status: IN_PROGRESS },
  {
    title: "Hold Me Tight",
    author: "Dr. Sue Johnson",
    status: NOT_STARTED,
  },
  {
    title: "Rich Dad, Poor Dad",
    author: "David Kamasaki",
    status: IN_PROGRESS,
  },
];

function Book() {
  // the constructor...
}

function addBookToLibrary(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const status = document.getElementById("status").value;

  const book = {
    title: title,
    author: author,
    status: status,
  };

  myLibrary.push(book);
  console.log(myLibrary);
  dialog.close();
  displayBooks(myLibrary);

  newBookForm.reset();
}

function displayBooks(books) {
  bookUl.innerHTML = "";
  books.forEach((book) => {
    const li = document.createElement("li");
    li.textContent = `${book.title} - by ${book.author} - ${book.status}`;
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
