import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeloFormComponent } from './velo-form.component';

describe('VeloFormComponent', () => {
  let component: VeloFormComponent;
  let fixture: ComponentFixture<VeloFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeloFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeloFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
