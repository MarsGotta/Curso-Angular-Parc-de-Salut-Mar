import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlHeaderComponent } from './owl-header.component';

describe('OwlHeaderComponent', () => {
  let component: OwlHeaderComponent;
  let fixture: ComponentFixture<OwlHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwlHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwlHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
