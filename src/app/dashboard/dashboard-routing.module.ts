import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, AuthGuardPermission } from 'src/app/core';
import { DashboardLayoutComponent } from 'src/app/layout/dashboard-layout/dashboard-layout.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'accessdenied',
        component: AccessDeniedComponent,
        canActivate: [AuthGuard],
      },

    ],
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
