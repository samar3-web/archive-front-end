import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandemutationAjoutComponent } from './demandemutation-ajout.component';

describe('DemandemutationAjoutComponent', () => {
  let component: DemandemutationAjoutComponent;
  let fixture: ComponentFixture<DemandemutationAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandemutationAjoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandemutationAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
