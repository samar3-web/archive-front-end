import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandemutationListComponent } from './demandemutation-list.component';

describe('DemandemutationListComponent', () => {
  let component: DemandemutationListComponent;
  let fixture: ComponentFixture<DemandemutationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandemutationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandemutationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
