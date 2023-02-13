import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedleavesComponent } from './rejectedleaves.component';

describe('RejectedleavesComponent', () => {
  let component: RejectedleavesComponent;
  let fixture: ComponentFixture<RejectedleavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedleavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectedleavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
