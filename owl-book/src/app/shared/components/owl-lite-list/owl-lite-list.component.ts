import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'owl-lite-list',
  templateUrl: './owl-lite-list.component.html',
  styleUrls: ['./owl-lite-list.component.css'],
})
export class OwlLiteListComponent implements OnInit {
  @Input() books: Array<any> = [];
  @Input() genres: Array<any> = [];
  @Output() addBook: EventEmitter<any> = new EventEmitter();
  @Output() deleteBook: EventEmitter<any> = new EventEmitter();

  bookTitle: string = '';
  showError: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  handleAddBook(): void {
    if (this.bookTitle) {
      this.showError = false;
      this.addBook.emit({
        title: this.bookTitle,
        author: 'Unknown',
        genreId: 0,
        lastBook: true,
        id: this.books.length + 1,
      });
    } else {
      this.showError = true;
    }
  }

  handleDeleteBook(id: number): void {
    this.deleteBook.emit(id);
  }
}
