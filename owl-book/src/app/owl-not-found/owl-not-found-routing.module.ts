import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwlNotFoundComponent } from './components/owl-not-found.component';

const routes: Routes = [
  {
    path: '**',
    component: OwlNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class OwlNotFoundRoutingModule {}
