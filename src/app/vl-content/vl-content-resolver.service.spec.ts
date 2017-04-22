import { TestBed, inject } from '@angular/core/testing';

import { VlContentResolverService } from './vl-content-resolver.service';

describe('VlContentResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VlContentResolverService]
    });
  });

  it('should ...', inject([VlContentResolverService], (service: VlContentResolverService) => {
    expect(service).toBeTruthy();
  }));
});
