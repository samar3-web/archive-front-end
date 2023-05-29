import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetPersonnelComponent } from './det-personnel.component';

describe('DetPersonnelComponent', () => {
  let component: DetPersonnelComponent;
  let fixture: ComponentFixture<DetPersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetPersonnelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
