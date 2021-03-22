import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlLiteListComponent } from './owl-lite-list.component';

describe('OwlLiteListComponent', () => {
  let component: OwlLiteListComponent;
  let fixture: ComponentFixture<OwlLiteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwlLiteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwlLiteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
