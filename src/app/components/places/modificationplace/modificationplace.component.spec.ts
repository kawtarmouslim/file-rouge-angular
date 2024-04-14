import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationplaceComponent } from './modificationplace.component';

describe('ModificationplaceComponent', () => {
  let component: ModificationplaceComponent;
  let fixture: ComponentFixture<ModificationplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificationplaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificationplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
