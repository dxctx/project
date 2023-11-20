import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PrimengModule } from 'src/app/primeng.module';

import { TaskComponent } from './task/task.component';
import { DashboardComponent } from './dashboard.component';
import { StaffComponent } from './staff/staff.component';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { InfoVaccineComponent } from './components/info-vaccine/info-vaccine.component';
import { TaskInfoComponent } from './components/task-info.component.ts/task-info.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CardInfoComponent,
    DashboardComponent,
    InfoVaccineComponent,
    StaffComponent,
    TaskComponent,
    TaskInfoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PrimengModule,
    FormsModule
  ]
})
export class DashboardModule { }
