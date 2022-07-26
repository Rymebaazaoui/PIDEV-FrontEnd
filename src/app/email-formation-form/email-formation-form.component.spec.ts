import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailFormationFormComponent } from './email-formation-form.component';

describe('EmailFormationFormComponent', () => {
  let component: EmailFormationFormComponent;
  let fixture: ComponentFixture<EmailFormationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailFormationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailFormationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
