import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiBooksResolver } from '../core/api-books/api-books.resolver';
import { ApiGenresResolver } from '../core/api-genres/api-genres.resolver';
import { OwlHomeComponent } from './components/owl-home.component';

const routes: Routes = [
  {
    path: '',
    component: OwlHomeComponent,
    resolve: {
      books: ApiBooksResolver,
      genres: ApiGenresResolver,
    },
  },
  {
    path: 'home',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class OwlHomeRoutingModule {}
