import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfilmsComponent } from './listfilms.component';

describe('ListfilmsComponent', () => {
  let component: ListfilmsComponent;
  let fixture: ComponentFixture<ListfilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListfilmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListfilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
