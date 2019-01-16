import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncidentListComponent } from './incident-list/incident-list.component';
import { IncidentCreateComponent } from './incident-create/incident-create.component';

const routes: Routes = [
  { path: 'incident/create', component: IncidentCreateComponent },
  { path: 'incident/list', component: IncidentListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
