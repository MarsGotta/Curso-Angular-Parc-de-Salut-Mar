import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlHomeComponent } from './owl-home.component';

describe('OwlHomeComponent', () => {
  let component: OwlHomeComponent;
  let fixture: ComponentFixture<OwlHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwlHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwlHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
