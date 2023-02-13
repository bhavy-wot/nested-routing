import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToggledashboardComponent } from './toggledashboard.component';

const routes: Routes = [{ path: '', component: ToggledashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToggledashboardRoutingModule { }
