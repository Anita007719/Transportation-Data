import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartScheduleComponent } from './departure-schedule/depart-schedule/depart-schedule.component';

// These are the routes which are matched and page is displayed on eithr of these two routes
const routes: Routes = [
  { path: '', component: DepartScheduleComponent },

  { path: 'departure', component: DepartScheduleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
