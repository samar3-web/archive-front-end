import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelListComponent } from './personnel-list.component';

describe('PersonnelListComponent', () => {
  let component: PersonnelListComponent;
  let fixture: ComponentFixture<PersonnelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnelListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonnelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
