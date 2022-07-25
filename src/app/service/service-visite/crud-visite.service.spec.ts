import { TestBed } from '@angular/core/testing';
import { CrudServiceVisite } from './crud-visite.service';

describe('CrudVisiteService', () => {
  let service: CrudServiceVisite;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudServiceVisite);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

