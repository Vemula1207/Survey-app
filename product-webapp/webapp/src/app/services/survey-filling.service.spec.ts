import { TestBed } from '@angular/core/testing';

import { SurveyFillingService } from './survey-filling.service';

describe('SurveyFillingService', () => {
  let service: SurveyFillingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyFillingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
