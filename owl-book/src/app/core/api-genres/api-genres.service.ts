import { Injectable } from '@angular/core';
import { Genre } from '../models/genre';

@Injectable({
  providedIn: 'root',
})
export class ApiGenresService {
  apiURL: string = 'http://localhost:4444/genres';

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
