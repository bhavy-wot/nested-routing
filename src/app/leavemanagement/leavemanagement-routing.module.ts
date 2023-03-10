import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovedleavesComponent } from './approvedleaves/approvedleaves.component';
import { LeavemanagementComponent } from './leavemanagement.component';
import { RejectedleavesComponent } from './rejectedleaves/rejectedleaves.component';

const routes: Routes = [
  {
     path: '', component: LeavemanagementComponent,
     children: [
      {
        path: 'approvedleaves',
        component: ApprovedleavesComponent,
        data: { breadcrumb: 'Approved Leaves'} 
      },
      {
        path: 'rejectedleaves',
        component: RejectedleavesComponent,
        data: { breadcrumb: 'Rejected Leaves'} 
      }
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeavemanagementRoutingModule { }
