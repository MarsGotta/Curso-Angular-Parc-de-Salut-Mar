import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlLazyComponent } from './components/owl-lazy.component';
import { OwlLazyRoutingModule } from './owl-lazy-routing.module';

@NgModule({
  declarations: [OwlLazyComponent],
  imports: [CommonModule, OwlLazyRoutingModule],
})
export class OwlLazyModule {}
