import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { IncidentDetailsDialogComponent } from '../incident-details-dialog/incident-details-dialog.component';

export interface Incident {
  id: string;
  title: string;
  partnerNumber: string;
  partnerName: string;
  incidentDate: string;
  creationDate: string;
  description: string;
  analysis: string;
  status: string;
}

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.css']
})
export class IncidentListComponent implements OnInit {

  displayedColumns: string[] = ['details', 'id', 'title', 'partnerNumber', 'partnerName', 'incidentDate', 'creationDate', 'status'];
  dataSource: MatTableDataSource<Incident>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  incidents = [
    {
      id: '1',
      title: 'Título 1',
      partnerNumber: '1000',
      partnerName: 'Claudio Oliveira de Aguiar',
      incidentDate: this.formatDate(new Date()),
      creationDate: this.formatDate(new Date()),
      description: 'Description 1',
      analysis: 'Analysis 1',
      status: 'Aberto',
    },
    {
      id: '2',
      title: 'Título 2',
      partnerNumber: '2000',
      partnerName: 'Vitor Claudio Chaves de Aguiar',
      incidentDate: this.formatDate(new Date()),
      creationDate: this.formatDate(new Date()),
      description: 'Description 2',
      analysis: 'Analysis 2',
      status: 'Aberto',
    },
    {
      id: '3',
      title: 'Título 3',
      partnerNumber: '3000',
      partnerName: 'Viviane Cristina Chaves de Aguiar',
      incidentDate: this.formatDate(new Date()),
      creationDate: this.formatDate(new Date()),
      description: 'Description 3',
      analysis: 'Analysis 3',
      status: 'Aberto',
    },
    {
      id: '4',
      title: 'Título 4',
      partnerNumber: '4000',
      partnerName: 'Maria Cristina Chaves de Aguiar',
      incidentDate: this.formatDate(new Date()),
      creationDate: this.formatDate(new Date()),
      description: 'Description 4',
      analysis: 'Analysis 4',
      status: 'Aberto',
    },
    {
      id: '5',
      title: 'Título 5',
      partnerNumber: '5000',
      partnerName: 'Paulo Vitor Leite Braz',
      incidentDate: this.formatDate(new Date()),
      creationDate: this.formatDate(new Date()),
      description: 'Description 5',
      analysis: 'Analysis 5',
      status: 'Fechado',
    },
    {
      id: '6',
      title: 'Título 6',
      partnerNumber: '6000',
      partnerName: 'Alexander Fernando Miranda',
      incidentDate: this.formatDate(new Date()),
      creationDate: this.formatDate(new Date()),
      description: 'Description 6',
      analysis: 'Analysis 6',
      status: 'Fechado',
    },
  ];

  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.incidents);
   }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  formatDate(date: Date): string {
    const day: string = date.getDate().toString();
    const month: string = date.getMonth().toString() + 1;
    const year: string = date.getFullYear().toString();

    return day + '/' + month + '/' + year;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(incident: Incident): void {
    const dialogRef = this.dialog.open(IncidentDetailsDialogComponent, {
      width: '75%',
      data: incident,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
