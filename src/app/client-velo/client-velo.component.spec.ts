import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientVeloComponent } from './client-velo.component';

describe('ClientVeloComponent', () => {
  let component: ClientVeloComponent;
  let fixture: ComponentFixture<ClientVeloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientVeloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientVeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
