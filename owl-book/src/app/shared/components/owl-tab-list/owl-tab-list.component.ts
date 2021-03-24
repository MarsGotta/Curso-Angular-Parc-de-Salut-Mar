import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'owl-tab-list',
  templateUrl: './owl-tab-list.component.html',
  styleUrls: ['./owl-tab-list.component.css'],
})
export class OwlTabListComponent implements OnInit {
  @Input() books: Array<any> = [];
  @Input() genres: Array<any> = [];

  genreSelected: number = 1;

  constructor() {}

  ngOnInit(): void {
    console.log(this.genres);
  }

  selectGenre(id: number): void {
    this.genreSelected = id;
  }
}
