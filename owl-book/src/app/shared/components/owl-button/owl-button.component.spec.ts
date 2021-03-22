import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlButtonComponent } from './owl-button.component';

describe('OwlButtonComponent', () => {
  let component: OwlButtonComponent;
  let fixture: ComponentFixture<OwlButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwlButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwlButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
