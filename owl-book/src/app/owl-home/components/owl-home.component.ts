import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/core/models/book';
import { Genre } from 'src/app/core/models/genre';

@Component({
  selector: 'owl-home',
  templateUrl: './owl-home.component.html',
  styleUrls: ['./owl-home.component.css'],
})
export class OwlHomeComponent implements OnInit {
  genres: Array<Genre> = [];
  books: Array<Book> = [];
  loading: Boolean = false;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ books, genres }) => {
      this.books = books;
      this.genres = genres;
    });
  }

  addBook(book: Book): void {
    this.books.unshift(book);
  }

  deleteBook(id: number) {
    this.books = this.books.filter((book) => book.id !== id);
  }
}
