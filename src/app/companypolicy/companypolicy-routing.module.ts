import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanypolicyComponent } from './companypolicy.component';
import { RequestsheetComponent } from './requestsheet/requestsheet.component';
import { TimelogComponent } from './timelog/timelog.component';
import { TimesheetComponent } from './timesheet/timesheet.component';

const routes: Routes = [
  {
     path: '', 
     component: CompanypolicyComponent,
     children:[
      {
        path: 'timelog',
        component: TimelogComponent,
      },
      {
        path: 'timesheet',
        component: TimesheetComponent,
      },
      {
        path: 'requestsheet',
        component: RequestsheetComponent,
      }
     ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanypolicyRoutingModule { }
