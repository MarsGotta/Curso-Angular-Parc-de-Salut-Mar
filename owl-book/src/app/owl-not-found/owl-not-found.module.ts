import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlNotFoundComponent } from './components/owl-not-found.component';
import { OwlNotFoundRoutingModule } from './owl-not-found-routing.module';

@NgModule({
  declarations: [OwlNotFoundComponent],
  imports: [CommonModule, OwlNotFoundRoutingModule],
})
export class OwlNotFoundModule {}
