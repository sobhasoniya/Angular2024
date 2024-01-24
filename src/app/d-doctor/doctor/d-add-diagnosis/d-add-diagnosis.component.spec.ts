import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DAddDiagnosisComponent } from './d-add-diagnosis.component';

describe('DAddDiagnosisComponent', () => {
  let component: DAddDiagnosisComponent;
  let fixture: ComponentFixture<DAddDiagnosisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DAddDiagnosisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DAddDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
