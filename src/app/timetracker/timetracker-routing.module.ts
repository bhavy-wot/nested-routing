import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimetrackerComponent } from './timetracker.component';

const routes: Routes = [{ path: '', component: TimetrackerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimetrackerRoutingModule { }
