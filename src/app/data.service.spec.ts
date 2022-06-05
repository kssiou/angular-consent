/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { dataService } from './data.service';

describe('Service: Data', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [dataService]
    });
  });

  it('should ...', inject([dataService], (service: dataService) => {
    expect(service).toBeTruthy();
  }));
});
