import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlDetailComponent } from './components/owl-detail.component';
import { OwlDetailRoutingModule } from './owl-detail-routing.module';

@NgModule({
  declarations: [OwlDetailComponent],
  imports: [CommonModule, OwlDetailRoutingModule],
})
export class OwlDetailModule {}
