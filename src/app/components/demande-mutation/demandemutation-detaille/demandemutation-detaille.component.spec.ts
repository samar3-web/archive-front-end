import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandemutationDetailleComponent } from './demandemutation-detaille.component';

describe('DemandemutationDetailleComponent', () => {
  let component: DemandemutationDetailleComponent;
  let fixture: ComponentFixture<DemandemutationDetailleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandemutationDetailleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandemutationDetailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
