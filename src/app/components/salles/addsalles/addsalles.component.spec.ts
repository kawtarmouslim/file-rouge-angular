import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsallesComponent } from './addsalles.component';

describe('AddsallesComponent', () => {
  let component: AddsallesComponent;
  let fixture: ComponentFixture<AddsallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddsallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
