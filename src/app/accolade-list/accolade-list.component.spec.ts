import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccoladeListComponent } from './accolade-list.component';

describe('AccoladeListComponent', () => {
  let component: AccoladeListComponent;
  let fixture: ComponentFixture<AccoladeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccoladeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccoladeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
