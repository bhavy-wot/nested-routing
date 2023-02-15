import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '', pathMatch: 'full'
  },
  { 
    path: 'timetracker',
    loadChildren: () => import('./timetracker/timetracker.module').then(m => m.TimetrackerModule), 
  },
  { 
    path: 'companypolicy', 
    loadChildren: () => import('./companypolicy/companypolicy.module').then(m => m.CompanypolicyModule),
  },
  { 
    path: 'leavemanagement', 
    loadChildren: () => import('./leavemanagement/leavemanagement.module').then(m => m.LeavemanagementModule),
  },
  { 
    path: 'payroll', 
    loadChildren: () => import('./payroll/payroll.module').then(m => m.PayrollModule),
  },
  { 
    path: 'password', 
    loadChildren: () => import('./password/password.module').then(m => m.PasswordModule),
  },
  { 
    path: 'togglereport', 
    loadChildren: () => import('./togglereport/togglereport.module').then(m => m.TogglereportModule),
  },
  { 
    path: 'toggledashboard', 
    loadChildren: () => import('./toggledashboard/toggledashboard.module').then(m => m.ToggledashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
