import { Injectable } from '@angular/core';
import { genres, books } from '../../owl-home/utils/constants';

@Injectable({
  providedIn: 'root',
})
export class ApiBooksService {
  apiURL: string = 'https://api.mocki.io/v1/569c937c';

  async getBooks(): Promise<any> {
    try {
      const books = await fetch(this.apiURL);
      const booksJson = books.json();
      return booksJson;
    } catch (error) {
      return error;
    }
  }
  constructor() {}
}
