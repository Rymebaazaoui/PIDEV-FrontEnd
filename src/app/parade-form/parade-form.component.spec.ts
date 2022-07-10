import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParadeFormComponent } from './parade-form.component';

describe('ParadeFormComponent', () => {
  let component: ParadeFormComponent;
  let fixture: ComponentFixture<ParadeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParadeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParadeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
