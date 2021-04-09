import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlLazyComponent } from './owl-lazy.component';

describe('OwlLazyComponent', () => {
  let component: OwlLazyComponent;
  let fixture: ComponentFixture<OwlLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwlLazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwlLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
