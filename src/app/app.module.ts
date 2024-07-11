import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassDirective } from './customDirectives/class.directive';
import { StyleDirective } from './customDirectives/style.directive';

@NgModule({
  declarations: [
    AppComponent,
    ClassDirective,
    StyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
