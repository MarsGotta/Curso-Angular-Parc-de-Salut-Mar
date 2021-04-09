import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { ApiGenresService } from './api-genres.service';

@Injectable({
  providedIn: 'root',
})
export class ApiGenresResolver implements Resolve<any> {
  constructor(private genresApi: ApiGenresService) {}
  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<any> {
    try {
      const genres = await this.genresApi.getGenres();
      return [...genres];
    } catch (error) {
      return error;
    }
  }
}
