import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlTabListComponent } from './owl-tab-list.component';

describe('OwlTabListComponent', () => {
  let component: OwlTabListComponent;
  let fixture: ComponentFixture<OwlTabListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwlTabListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwlTabListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
