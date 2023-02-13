import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToggledashboardRoutingModule } from './toggledashboard-routing.module';
import { ToggledashboardComponent } from './toggledashboard.component';


@NgModule({
  declarations: [
    ToggledashboardComponent
  ],
  imports: [
    CommonModule,
    ToggledashboardRoutingModule
  ]
})
export class ToggledashboardModule { }
