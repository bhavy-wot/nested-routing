import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglereportComponent } from './togglereport.component';

describe('TogglereportComponent', () => {
  let component: TogglereportComponent;
  let fixture: ComponentFixture<TogglereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogglereportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TogglereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
