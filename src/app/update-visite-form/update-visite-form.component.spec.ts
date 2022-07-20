import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVisiteFormComponent } from './update-visite-form.component';

describe('UpdateVisiteFormComponent', () => {
  let component: UpdateVisiteFormComponent;
  let fixture: ComponentFixture<UpdateVisiteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVisiteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVisiteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
