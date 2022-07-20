import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFormationComponent } from './client-formation.component';

describe('ClientFormationComponent', () => {
  let component: ClientFormationComponent;
  let fixture: ComponentFixture<ClientFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
