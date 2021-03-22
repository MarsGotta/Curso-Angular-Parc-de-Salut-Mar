import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { OwlHomeComponent } from './components/owl-home.component';

@NgModule({
  declarations: [OwlHomeComponent],
  imports: [CommonModule, SharedModule],
  exports: [OwlHomeComponent],
})
export class OwlHomeModule {}
