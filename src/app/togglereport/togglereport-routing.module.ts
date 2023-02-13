import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TogglereportComponent } from './togglereport.component';

const routes: Routes = [{ path: '', component: TogglereportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TogglereportRoutingModule { }
