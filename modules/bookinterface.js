import Store from './bookStore.js';

export default class Bookinterface {
  static bookDetails() {
    const books = Store.getBook();
    books.forEach((booklist) => Bookinterface.addbook(booklist));
  }

  static addbook(booklist) {
    const outputField = document.getElementById('outputField');
    const bookContWrapper = document.createElement('div');
    const bookListCont = document.createElement('div');
    const listWrapper = document.createElement('div');
    const bookName = document.createElement('h2');
    const bookAuthor = document.createElement('h2');
    const byText = document.createElement('h2');
    bookListCont.classList.add('book-list-style');
    bookAuthor.classList.add('list-cont-style');
    bookName.classList.add('list-cont-style');
    const removeBtn = document.createElement('button');
    bookContWrapper.classList.add('book-cont-wrap');
    removeBtn.innerText = 'Remove';
    removeBtn.classList.add('delete');
    listWrapper.classList.add('list-wrapper');
    bookName.innerHTML = `${booklist.title}`;
    bookAuthor.innerHTML = `${booklist.author}`;
    byText.innerHTML = 'By';
    byText.classList.add('list-cont-style');
    bookContWrapper.append(bookName, byText, bookAuthor);
    listWrapper.append(bookContWrapper, bookListCont);
    outputField.append(listWrapper);
    bookListCont.append(removeBtn);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearInput() {
    document.getElementById('bookTitle').value = '';
    document.getElementById('bookAuthor').value = '';
  }
}