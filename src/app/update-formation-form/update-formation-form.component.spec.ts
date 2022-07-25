import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFormationFormComponent } from './update-formation-form.component';

describe('UpdateFormationFormComponent', () => {
  let component: UpdateFormationFormComponent;
  let fixture: ComponentFixture<UpdateFormationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFormationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFormationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
