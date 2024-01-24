import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DAppointmentViewComponent } from './d-appointment-view.component';

describe('DAppointmentViewComponent', () => {
  let component: DAppointmentViewComponent;
  let fixture: ComponentFixture<DAppointmentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DAppointmentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DAppointmentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
