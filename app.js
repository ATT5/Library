'use strict';

const addBook = document.querySelector('.add-book');
const op = document.querySelector('.op');
const form = document.querySelector('.form');
const add = document.querySelector('.add');
const body = document.querySelector('body');
const cardsContainer = document.querySelector('.cards');
//inputs
const bookTitle = document.querySelector('.b-titile');
const bookAuthor = document.querySelector('.b-author');
const readed = document.querySelector('.readed');

addBook.addEventListener('click', function () {
  op.style.opacity = '0.5';
  form.classList.remove('active');
});

let myLibrary = [];

add.addEventListener('click', function (e) {
  e.preventDefault();
  op.style.opacity = '1';
  form.classList.add('active');
  addBookLibrary(bookAuthor.value, bookTitle.value);
  bookAuthor.value = '';
  bookTitle.value = '';
});

function Book(author, title, readed) {
  this.title = title;
  this.author = author;
  this.readed = readed;
}

function addBookLibrary(author, titile) {
  const bookAdded = new Book(author, titile, readed.checked);

  myLibrary.push(bookAdded);
  addCard();
}

function addCard() {
  cardsContainer.innerHTML = '';
  myLibrary.forEach(book => {
    const bookReaded = book.readed === true ? 'readed' : 'no-readed';
    const html = `<div class="book-card">
                            <label for="title">
                                <p>Title</p>
                                <p class="title">${book.title}</p>
                            </label>
                            <label for="author">
                                <p>Author</p>
                                <p class="author">${book.author}</p>
                            </label>
                            <button class="btn ${bookReaded}" onclick="allReadyReaded(this)">Readed</button>
                            <button class="btn delete" onclick="deleteCard('${book.title}','${book.author}')">Delete</button>
                        </div> `;
    cardsContainer.insertAdjacentHTML('beforeend', html);
  });
}

function allReadyReaded(btn) {
  if (btn.classList.contains('readed')) {
    btn.classList.remove('readed');
    btn.classList.add('no-readed');
  } else if (btn.classList.contains('no-readed')) {
    btn.classList.remove('no-readed');
    btn.classList.add('readed');
  }
}

function deleteCard(title) {
  const newArray = myLibrary.filter(book => {
    if (book.title !== title) {
      return book;
    }
  });
  myLibrary = newArray;
  addCard();
}
