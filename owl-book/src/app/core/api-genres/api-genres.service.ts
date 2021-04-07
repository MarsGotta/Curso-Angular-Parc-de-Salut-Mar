import { Injectable } from '@angular/core';
import { Genre } from '../models/genre';

@Injectable({
  providedIn: 'root',
})
export class ApiGenresService {
  apiURL: string = 'https://api.mocki.io/v1/50f7f3ef';

  async getGenres(): Promise<Genre[]> {
    try {
      const genres = await fetch(this.apiURL);
      const genresJson = genres.json();
      return genresJson;
    } catch (error) {
      return error;
    }
  }

  constructor() {}
}
