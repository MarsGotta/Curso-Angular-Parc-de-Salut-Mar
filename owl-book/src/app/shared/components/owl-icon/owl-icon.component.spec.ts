import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlIconComponent } from './owl-icon.component';

describe('OwlIconComponent', () => {
  let component: OwlIconComponent;
  let fixture: ComponentFixture<OwlIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwlIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwlIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
