import { TestBed } from '@angular/core/testing';

import { CrudVeloService } from './crud-velo.service';

describe('CrudVeloService', () => {
  let service: CrudVeloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudVeloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
