import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwlLazyComponent } from './components/owl-lazy.component';

const routes: Routes = [
  {
    path: '',
    component: OwlLazyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwlLazyRoutingModule {}
