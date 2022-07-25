import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAssociationComponent } from './client-association.component';

describe('ClientAssociationComponent', () => {
  let component: ClientAssociationComponent;
  let fixture: ComponentFixture<ClientAssociationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAssociationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
