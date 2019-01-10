import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncidentComponent } from './incident/incident.component';

const routes: Routes = [
  { path: 'incident/create', component: IncidentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
