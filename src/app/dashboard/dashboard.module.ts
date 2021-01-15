import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';

import { NewDesignComponent } from './new-design/new-design.component';
import { ContinueDesignComponent } from './continue-design/continue-design.component';
import { GeneralComponent } from './general/general.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MaterialModule } from '../material.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule

  ],
  declarations: [
    HomeComponent,
    NewDesignComponent,
    ContinueDesignComponent,
    GeneralComponent,
    ChangePasswordComponent],
  exports: [],
})
export class DashboardModule { }
