import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlInputComponent } from './owl-input.component';

describe('OwlInputComponent', () => {
  let component: OwlInputComponent;
  let fixture: ComponentFixture<OwlInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwlInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwlInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
