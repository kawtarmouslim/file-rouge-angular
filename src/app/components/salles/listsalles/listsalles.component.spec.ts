import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsallesComponent } from './listsalles.component';

describe('ListsallesComponent', () => {
  let component: ListsallesComponent;
  let fixture: ComponentFixture<ListsallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListsallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
