import { Component, OnInit } from '@angular/core';
import { genres, books } from '../utils/constants';

@Component({
  selector: 'owl-home',
  templateUrl: './owl-home.component.html',
  styleUrls: ['./owl-home.component.css'],
})
export class OwlHomeComponent implements OnInit {
  genres: Array<any> = genres;
  books: Array<any> = books;
  constructor() {}

  ngOnInit(): void {
    //console.log(this.genres);
  }

  addBook(event: any): void {
    console.log('Soy un evento :', event);
  }
}
