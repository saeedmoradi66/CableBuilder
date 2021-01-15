import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, AuthGuardPermission } from 'src/app/core';
import { DashboardLayoutComponent } from 'src/app/layout/dashboard-layout/dashboard-layout.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ConductorOperationComponent } from './conductor-operation/conductor-operation.component';
import { ConductorComponent } from './Conductor/Conductor.component';
import { ContinueDesignComponent } from './continue-design/continue-design.component';
import { CrossSectionComponent } from './CrossSection/CrossSection.component';
import { GeneralComponent } from './general/general.component';
import { HomeComponent } from './home/home.component';
import { NewDesignComponent } from './new-design/new-design.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'ContinueDesign',
        component: ContinueDesignComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'NewDesign',
        component: NewDesignComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'general',
        component: GeneralComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'Conductor',
        component: ConductorComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'ConductorOperation',
        component: ConductorOperationComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'changepass',
        component: ChangePasswordComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'accessdenied',
        component: AccessDeniedComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'UnderConstruction',
        component: UnderConstructionComponent,
        canActivate: [AuthGuard],
      }

    ],
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
