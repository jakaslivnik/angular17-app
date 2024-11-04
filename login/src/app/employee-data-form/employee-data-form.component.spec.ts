import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDataFormComponent } from './employee-data-form.component';

describe('EmployeeDataFormComponent', () => {
  let component: EmployeeDataFormComponent;
  let fixture: ComponentFixture<EmployeeDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeDataFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
