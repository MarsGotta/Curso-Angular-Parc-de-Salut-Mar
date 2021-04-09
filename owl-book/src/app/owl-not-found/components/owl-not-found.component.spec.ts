import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlNotFoundComponent } from './owl-not-found.component';

describe('OwlNotFoundComponent', () => {
  let component: OwlNotFoundComponent;
  let fixture: ComponentFixture<OwlNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwlNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwlNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
