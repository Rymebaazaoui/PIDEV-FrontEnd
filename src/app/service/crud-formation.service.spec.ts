import { TestBed } from '@angular/core/testing';

import { CrudFormationService } from './crud-formation.service';

describe('CrudFormationService', () => {
  let service: CrudFormationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudFormationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
