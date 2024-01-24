import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMedcineComponent } from './list-medcine.component';

describe('ListMedcineComponent', () => {
  let component: ListMedcineComponent;
  let fixture: ComponentFixture<ListMedcineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMedcineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMedcineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
