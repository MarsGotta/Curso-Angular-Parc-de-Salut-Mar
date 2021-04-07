import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiBooksService } from './api-books/api-books.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [ApiBooksService],
})
export class CoreModule {}
