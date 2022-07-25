import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteFormComponent } from './visite-form.component';

describe('VisiteFormComponent', () => {
  let component: VisiteFormComponent;
  let fixture: ComponentFixture<VisiteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisiteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
