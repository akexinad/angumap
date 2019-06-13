/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DopeService } from './dope.service';

describe('Service: Dope', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DopeService]
    });
  });

  it('should ...', inject([DopeService], (service: DopeService) => {
    expect(service).toBeTruthy();
  }));
});
