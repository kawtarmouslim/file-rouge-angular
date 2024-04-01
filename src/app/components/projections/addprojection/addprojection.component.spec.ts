import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprojectionComponent } from './addprojection.component';

describe('AddprojectionComponent', () => {
  let component: AddprojectionComponent;
  let fixture: ComponentFixture<AddprojectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprojectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddprojectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
