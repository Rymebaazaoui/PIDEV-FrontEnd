import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVeloComponent } from './update-velo.component';

describe('UpdateVeloComponent', () => {
  let component: UpdateVeloComponent;
  let fixture: ComponentFixture<UpdateVeloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVeloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
