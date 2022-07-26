import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserverVeloFormComponent } from './reserver-velo-form.component';

describe('ReserverVeloFormComponent', () => {
  let component: ReserverVeloFormComponent;
  let fixture: ComponentFixture<ReserverVeloFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserverVeloFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserverVeloFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
