import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwlLoginComponent } from './components/owl-login.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';

const routes: Routes = [
  {
    path: 'login',
    component: OwlLoginComponent,
    children: [
      {
        path: '',
        component: TemplateFormComponent,
      },
      {
        path: 'reactive',
        component: ReactiveFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class OwlLoginRoutingModule {}
