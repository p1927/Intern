/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StudentloginComponent } from './studentlogin.component';

describe('StudentloginComponent', () => {
  let component: StudentloginComponent;
  let fixture: ComponentFixture<StudentloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
