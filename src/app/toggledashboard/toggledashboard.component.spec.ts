import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggledashboardComponent } from './toggledashboard.component';

describe('ToggledashboardComponent', () => {
  let component: ToggledashboardComponent;
  let fixture: ComponentFixture<ToggledashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggledashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggledashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
