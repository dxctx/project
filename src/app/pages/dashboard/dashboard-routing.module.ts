import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { DashboardComponent } from './dashboard.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [

      {
        path: 'task',
        component: TaskComponent,
      },
      {
        path: 'staff',
        component: StaffComponent,
      },
      {
        path: '**',
        redirectTo: 'task',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
