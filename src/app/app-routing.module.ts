import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { 
    path: 'timetracker',
    loadChildren: () => import('./timetracker/timetracker.module').then(m => m.TimetrackerModule),
    data: { breadcrumb: 'HRMS > Time Tracker'} 
  },
  { 
    path: 'companypolicy', 
    loadChildren: () => import('./companypolicy/companypolicy.module').then(m => m.CompanypolicyModule),
    data: { breadcrumb: 'HRMS > Company Policy'} 
  },
  { 
    path: 'leavemanagement', 
    loadChildren: () => import('./leavemanagement/leavemanagement.module').then(m => m.LeavemanagementModule),
    data: { breadcrumb: 'HRMS > Leave Management'} 
  },
  { 
    path: 'payroll', 
    loadChildren: () => import('./payroll/payroll.module').then(m => m.PayrollModule),
    data: { breadcrumb: 'HRMS > Payroll'} 
  },
  { 
    path: 'password', 
    loadChildren: () => import('./password/password.module').then(m => m.PasswordModule),
    data: { breadcrumb: 'Password Management > Password'} 
  },
  { 
    path: 'togglereport', 
    loadChildren: () => import('./togglereport/togglereport.module').then(m => m.TogglereportModule),
    data: { breadcrumb: 'Toggle > Toggle Report'} 
  },
  { 
    path: 'toggledashboard', 
    loadChildren: () => import('./toggledashboard/toggledashboard.module').then(m => m.ToggledashboardModule),
    data: { breadcrumb: 'Toggle > Toggle Dashboard'} 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
