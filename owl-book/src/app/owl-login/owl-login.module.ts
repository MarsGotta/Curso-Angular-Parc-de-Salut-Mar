import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlLoginComponent } from './components/owl-login.component';
import { OwlLoginRoutingModule } from './owl-login-routing.module';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';

@NgModule({
  declarations: [OwlLoginComponent, ReactiveFormComponent, TemplateFormComponent],
  imports: [CommonModule, OwlLoginRoutingModule],
})
export class OwlLoginModule {}
