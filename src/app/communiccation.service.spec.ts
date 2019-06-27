import { TestBed } from '@angular/core/testing';

import { CommuniccationService } from './communiccation.service';

describe('CommuniccationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommuniccationService = TestBed.get(CommuniccationService);
    expect(service).toBeTruthy();
  });
});
