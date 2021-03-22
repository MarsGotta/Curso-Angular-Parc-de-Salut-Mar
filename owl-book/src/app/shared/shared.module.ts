import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OwlTabListComponent } from './components/owl-tab-list/owl-tab-list.component';
import { OwlItemComponent } from './components/owl-item/owl-item.component';
import { OwlLiteListComponent } from './components/owl-lite-list/owl-lite-list.component';
import { OwlIconComponent } from './components/owl-icon/owl-icon.component';
import { OwlButtonComponent } from './components/owl-button/owl-button.component';
import { OwlInputComponent } from './components/owl-input/owl-input.component';
import { OwlRatingComponent } from './components/owl-rating/owl-rating.component';
import { OwlHeaderComponent } from './components/owl-header/owl-header.component';
import { OwlNavBarComponent } from './components/owl-nav-bar/owl-nav-bar.component';

@NgModule({
  declarations: [
    OwlTabListComponent,
    OwlItemComponent,
    OwlLiteListComponent,
    OwlIconComponent,
    OwlButtonComponent,
    OwlInputComponent,
    OwlRatingComponent,
    OwlHeaderComponent,
    OwlNavBarComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    OwlTabListComponent,
    OwlItemComponent,
    OwlLiteListComponent,
    OwlIconComponent,
    OwlButtonComponent,
    OwlInputComponent,
    OwlRatingComponent,
    OwlHeaderComponent,
    OwlNavBarComponent,
  ],
})
export class SharedModule {}
