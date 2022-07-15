import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateParadeFormComponent } from './update-parade-form.component';

describe('UpdateParadeFormComponent', () => {
  let component: UpdateParadeFormComponent;
  let fixture: ComponentFixture<UpdateParadeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateParadeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateParadeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
