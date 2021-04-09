import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlLoginComponent } from './owl-login.component';

describe('OwlLoginComponent', () => {
  let component: OwlLoginComponent;
  let fixture: ComponentFixture<OwlLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwlLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwlLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
