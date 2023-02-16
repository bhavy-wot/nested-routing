import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FadeComponent } from './fade/fade.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {BreadcrumbModule} from 'xng-breadcrumb';



@NgModule({
  declarations: [
    AppComponent,
    FadeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BreadcrumbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
