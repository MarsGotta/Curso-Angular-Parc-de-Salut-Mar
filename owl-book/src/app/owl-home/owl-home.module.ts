import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { OwlHomeComponent } from './components/owl-home.component';
import { OwlHomeRoutingModule } from './owl-home-routing.module';

@NgModule({
  declarations: [OwlHomeComponent],
  imports: [CommonModule, SharedModule, OwlHomeRoutingModule],
  exports: [OwlHomeComponent],
})
export class OwlHomeModule {}
