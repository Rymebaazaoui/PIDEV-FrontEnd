import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionAssociationFormComponent } from './inscription-association-form.component';

describe('InscriptionAssociationFormComponent', () => {
  let component: InscriptionAssociationFormComponent;
  let fixture: ComponentFixture<InscriptionAssociationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionAssociationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionAssociationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
