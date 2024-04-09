import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierfilmComponent } from './modifierfilm.component';

describe('ModifierfilmComponent', () => {
  let component: ModifierfilmComponent;
  let fixture: ComponentFixture<ModifierfilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierfilmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierfilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
