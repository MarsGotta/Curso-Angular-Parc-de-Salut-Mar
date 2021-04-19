import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OwlDetailModule } from './owl-detail/owl-detail.module';
import { OwlHomeModule } from './owl-home/owl-home.module';
import { OwlLoginModule } from './owl-login/owl-login.module';
import { OwlNotFoundModule } from './owl-not-found/owl-not-found.module';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TasksModule,
    SharedModule,
    OwlHomeModule,
    OwlDetailModule,
    OwlLoginModule,
    OwlNotFoundModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
