import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentDetailsDialogComponent } from './incident-details-dialog.component';

describe('IncidentDetailsDialogComponent', () => {
  let component: IncidentDetailsDialogComponent;
  let fixture: ComponentFixture<IncidentDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentDetailsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
