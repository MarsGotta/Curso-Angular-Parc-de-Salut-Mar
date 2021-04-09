import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAppGuard } from '../core/auth-app/auth-app.guard';
import { OwlDetailComponent } from './components/owl-detail.component';

const routes: Routes = [
  {
    path: 'detail/:id',
    component: OwlDetailComponent,
    data: {
      title: 'Detalles del libro',
    },
    canActivate: [AuthAppGuard],
  },
  {
    path: 'detail',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class OwlDetailRoutingModule {}
