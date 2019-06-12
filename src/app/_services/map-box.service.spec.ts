/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MapBoxService } from './map-box.service';

describe('Service: MapBox', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapBoxService]
    });
  });

  it('should ...', inject([MapBoxService], (service: MapBoxService) => {
    expect(service).toBeTruthy();
  }));
});
