import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartScheduleComponent } from './depart-schedule.component';

describe('DepartScheduleComponent', () => {
  let component: DepartScheduleComponent;
  let fixture: ComponentFixture<DepartScheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartScheduleComponent]
    });
    fixture = TestBed.createComponent(DepartScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
