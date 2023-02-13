import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanypolicyRoutingModule } from './companypolicy-routing.module';
import { CompanypolicyComponent } from './companypolicy.component';
import { TimelogComponent } from './timelog/timelog.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { RequestsheetComponent } from './requestsheet/requestsheet.component';


@NgModule({
    declarations: [
        CompanypolicyComponent,
        TimelogComponent,
        TimesheetComponent,
        RequestsheetComponent,
    ],
    imports: [
        CommonModule,
        CompanypolicyRoutingModule,
    ]
})
export class CompanypolicyModule { }
