import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationticketComponent } from './modificationticket.component';

describe('ModificationticketComponent', () => {
  let component: ModificationticketComponent;
  let fixture: ComponentFixture<ModificationticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificationticketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificationticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
