import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientVMListComponent } from './patient-vm-list.component';

describe('PatientVMListComponent', () => {
  let component: PatientVMListComponent;
  let fixture: ComponentFixture<PatientVMListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientVMListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientVMListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
