import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeavemanagementRoutingModule } from './leavemanagement-routing.module';
import { LeavemanagementComponent } from './leavemanagement.component';
import { ApprovedleavesComponent } from './approvedleaves/approvedleaves.component';
import { RejectedleavesComponent } from './rejectedleaves/rejectedleaves.component';


@NgModule({
  declarations: [
    LeavemanagementComponent,
    ApprovedleavesComponent,
    RejectedleavesComponent
  ],
  imports: [
    CommonModule,
    LeavemanagementRoutingModule
  ]
})
export class LeavemanagementModule { }
