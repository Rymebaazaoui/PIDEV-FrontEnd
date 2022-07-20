import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionFormationFormComponent } from './inscription-formation-form.component';

describe('InscriptionFormationFormComponent', () => {
  let component: InscriptionFormationFormComponent;
  let fixture: ComponentFixture<InscriptionFormationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionFormationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionFormationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
