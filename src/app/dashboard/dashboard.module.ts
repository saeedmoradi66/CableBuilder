import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';






@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
   
    
    
    
    
  ],
  exports: [],
})
export class DashboardModule {}
