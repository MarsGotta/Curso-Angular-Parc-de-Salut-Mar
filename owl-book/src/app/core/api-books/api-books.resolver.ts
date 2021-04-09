import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Book } from '../models/book';
import { ApiBooksService } from './api-books.service';

@Injectable({
  providedIn: 'root',
})
export class ApiBooksResolver implements Resolve<any> {
  constructor(private booksApi: ApiBooksService) {}
  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<any> {
    try {
      const books = await this.booksApi.getBooks();
      return books.map((book: Book) => {
        return { ...book, src: `assets/${book.src}` };
      });
    } catch (error) {
      return error;
    }
  }
}
