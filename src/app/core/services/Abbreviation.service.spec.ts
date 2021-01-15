/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AbbreviationService } from './Abbreviation.service';

describe('Service: Abbreviation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbbreviationService]
    });
  });

  it('should ...', inject([AbbreviationService], (service: AbbreviationService) => {
    expect(service).toBeTruthy();
  }));
});
