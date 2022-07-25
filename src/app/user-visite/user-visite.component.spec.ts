import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVisiteComponent } from './user-visite.component';

describe('UserVisiteComponent', () => {
  let component: UserVisiteComponent;
  let fixture: ComponentFixture<UserVisiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserVisiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
