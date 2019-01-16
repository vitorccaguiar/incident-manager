import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';

import { AppComponent } from './app.component';
import { IncidentListComponent } from './incident-list/incident-list.component';
import { IncidentCreateComponent } from './incident-create/incident-create.component';
import { IncidentDetailsDialogComponent } from './incident-details-dialog/incident-details-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    IncidentListComponent,
    IncidentCreateComponent,
    IncidentDetailsDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  entryComponents: [
    IncidentDetailsDialogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
