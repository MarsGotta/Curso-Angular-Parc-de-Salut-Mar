import { Component } from '@angular/core';
import { genres, books } from '../utils/constants';

@Component({
  selector: 'owl-home',
  templateUrl: './owl-home.component.html',
  styleUrls: ['./owl-home.component.css'],
})
export class OwlHomeComponent {
  genres: Array<any> = genres;
  books: Array<any> = books;
  constructor() {}

  addBook(book: object): void {
    this.books.unshift(book);
  }

  deleteBook(id: number) {
    this.books = this.books.filter((book) => book.id !== id);
  }
}
