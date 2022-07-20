import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientParadeComponent } from './client-parade.component';

describe('ClientParadeComponent', () => {
  let component: ClientParadeComponent;
  let fixture: ComponentFixture<ClientParadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientParadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientParadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
