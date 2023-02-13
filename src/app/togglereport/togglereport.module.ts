import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TogglereportRoutingModule } from './togglereport-routing.module';
import { TogglereportComponent } from './togglereport.component';


@NgModule({
  declarations: [
    TogglereportComponent
  ],
  imports: [
    CommonModule,
    TogglereportRoutingModule
  ]
})
export class TogglereportModule { }
