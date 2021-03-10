import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurnamesComponent } from './surnames.component';

describe('SurnamesComponent', () => {
  let component: SurnamesComponent;
  let fixture: ComponentFixture<SurnamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurnamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurnamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
