import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlDetailComponent } from './owl-detail.component';

describe('OwlDetailComponent', () => {
  let component: OwlDetailComponent;
  let fixture: ComponentFixture<OwlDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwlDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwlDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
