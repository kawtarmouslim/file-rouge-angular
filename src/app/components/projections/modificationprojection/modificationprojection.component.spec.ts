import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationprojectionComponent } from './modificationprojection.component';

describe('ModificationprojectionComponent', () => {
  let component: ModificationprojectionComponent;
  let fixture: ComponentFixture<ModificationprojectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificationprojectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificationprojectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
