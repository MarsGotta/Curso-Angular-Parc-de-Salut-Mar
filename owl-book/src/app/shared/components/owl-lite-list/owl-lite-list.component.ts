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

  bookTitle: string = '';

  constructor() {}

  ngOnInit(): void {}

  handleAddBook(): void {
    console.log('Hola');
    this.addBook.emit(this.bookTitle);
  }
}
