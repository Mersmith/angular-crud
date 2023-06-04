import { TestBed } from '@angular/core/testing';

import { EmpleadoCrudService } from './empleado-crud.service';

describe('EmpleadoCrudService', () => {
  let service: EmpleadoCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleadoCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
