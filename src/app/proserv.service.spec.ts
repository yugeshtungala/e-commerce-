import { TestBed } from '@angular/core/testing';

import { ProservService } from './proserv.service';

describe('ProservService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProservService = TestBed.get(ProservService);
    expect(service).toBeTruthy();
  });
});
