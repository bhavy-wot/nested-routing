import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimetrackerRoutingModule } from './timetracker-routing.module';
import { TimetrackerComponent } from './timetracker.component';


@NgModule({
  declarations: [
    TimetrackerComponent
  ],
  imports: [
    CommonModule,
    TimetrackerRoutingModule
  ]
})
export class TimetrackerModule { }
