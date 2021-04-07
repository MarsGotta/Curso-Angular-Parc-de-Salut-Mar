import { Component, OnInit } from '@angular/core';
import { ApiBooksService } from 'src/app/core/api-books/api-books.service';
import { ApiGenresService } from 'src/app/core/api-genres/api-genres.service';
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
  constructor(
    private booksApi: ApiBooksService,
    private genresApi: ApiGenresService
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      this.loading = true;
      const books = await this.booksApi.getBooks();
      const genres = await this.genresApi.getGenres();
      this.books = books.map((book: Book) => {
        return { ...book, src: `assets/${book.src}` };
      });
      this.genres = genres;
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
    }
  }

  addBook(book: Book): void {
    this.books.unshift(book);
  }

  deleteBook(id: number) {
    this.books = this.books.filter((book) => book.id !== id);
  }
}
