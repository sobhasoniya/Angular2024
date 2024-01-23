import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DPatientHistoryComponent } from './d-patient-history.component';

describe('DPatientHistoryComponent', () => {
  let component: DPatientHistoryComponent;
  let fixture: ComponentFixture<DPatientHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DPatientHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DPatientHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
