import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlNavBarComponent } from './owl-nav-bar.component';

describe('OwlNavBarComponent', () => {
  let component: OwlNavBarComponent;
  let fixture: ComponentFixture<OwlNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwlNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwlNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
