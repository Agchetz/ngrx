import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCouterComponent } from './my-couter.component';

describe('MyCouterComponent', () => {
  let component: MyCouterComponent;
  let fixture: ComponentFixture<MyCouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
