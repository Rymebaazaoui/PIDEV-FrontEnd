import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionParadeFormComponent } from './inscription-parade-form.component';

describe('InscriptionParadeFormComponent', () => {
  let component: InscriptionParadeFormComponent;
  let fixture: ComponentFixture<InscriptionParadeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionParadeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionParadeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
