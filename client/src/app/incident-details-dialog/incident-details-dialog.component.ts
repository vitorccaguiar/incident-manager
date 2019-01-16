import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface Incident {
  id: string;
  title: string;
  description: string;
  analysis: string;
  partnerNumber: string;
  partnerName: string;
  incidentDate: string;
  creationDate: string;
  status: string;
}

@Component({
  selector: 'app-incident-details-dialog',
  templateUrl: './incident-details-dialog.component.html',
  styleUrls: ['./incident-details-dialog.component.css']
})
export class IncidentDetailsDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<IncidentDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Incident) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}

}
