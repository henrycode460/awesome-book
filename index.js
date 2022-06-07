import Book from './modules/book.js';
import Bookinterface from './modules/bookinterface.js';
import Store from './modules/bookStore.js';

// Date and Time with Luxon

import { DateTime } from './node_modules/luxon/build/es6/luxon.js';

// displaying book details

document.addEventListener('DOMContentLoaded', Bookinterface.bookDetails);
// adding book
document.querySelector('#bookForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('bookTitle').value;
  const author = document.getElementById('bookAuthor').value;
  const book = new Book(title, author);

  // Adding book to user interface
  Bookinterface.addbook(book);

  // add book to store
  Store.addBook(book);

  Bookinterface.clearInput();
});

// Removing Book

document.querySelector('#outputField').addEventListener('click', (e) => {
  // remove book for interface
  Bookinterface.deleteBook(e.target);

  //    remove book for storage
  Store.removeBook(e.target.parentElement.parentElement.firstChild.firstChild.textContent);
});

// navigation script
const listview = document.getElementById('list');
const formView = document.getElementById('addNew');
const contactView = document.getElementById('contact');

listview.addEventListener('click', () => {
  document.getElementById('listviewMain').style.visibility = 'visible';
  document.getElementById('form-div').style.visibility = 'hidden';
  document.getElementById('contact-sec').style.visibility = 'hidden';
});

formView.addEventListener('click', () => {
  document.getElementById('form-div').style.visibility = 'visible';
  document.getElementById('contact-sec').style.visibility = 'hidden';
  document.getElementById('listviewMain').style.visibility = 'hidden';
});

contactView.addEventListener('click', () => {
  document.getElementById('contact-sec').style.visibility = 'visible';
  document.getElementById('form-div').style.visibility = 'hidden';
  document.getElementById('listviewMain').style.visibility = 'hidden';
});

const date = DateTime.now();
const dateDisplay = document.querySelector('.date-container');
dateDisplay.textContent = date.toJSDate();
