import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlItemComponent } from './owl-item.component';

describe('OwlItemComponent', () => {
  let component: OwlItemComponent;
  let fixture: ComponentFixture<OwlItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwlItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwlItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
