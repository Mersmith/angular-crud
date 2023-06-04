import { TestBed } from '@angular/core/testing';

import { RouteAliasService } from './route-alias.service';

describe('RouteAliasService', () => {
  let service: RouteAliasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteAliasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
