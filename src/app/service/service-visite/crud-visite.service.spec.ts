import { TestBed } from '@angular/core/testing';

import { CrudVisiteService } from './crud-visite.service';

describe('CrudVisiteService', () => {
  let service: CrudVisiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudVisiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
