import { TestBed } from '@angular/core/testing';

import { CrudAssociationService } from './crud-association.service';

describe('CrudAssociationService', () => {
  let service: CrudAssociationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudAssociationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
