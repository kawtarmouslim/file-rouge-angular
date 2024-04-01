import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListprojectionsComponent } from './listprojections.component';

describe('ListprojectionsComponent', () => {
  let component: ListprojectionsComponent;
  let fixture: ComponentFixture<ListprojectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListprojectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListprojectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
