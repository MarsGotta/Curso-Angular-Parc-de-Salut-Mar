import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlRatingComponent } from './owl-rating.component';

describe('OwlRatingComponent', () => {
  let component: OwlRatingComponent;
  let fixture: ComponentFixture<OwlRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwlRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwlRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
