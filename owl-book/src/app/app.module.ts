import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { OwlHomeModule } from './owl-home/owl-home.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, OwlHomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
