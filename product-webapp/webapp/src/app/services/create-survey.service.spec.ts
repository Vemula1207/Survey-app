import { TestBed } from '@angular/core/testing';

import { CreateSurveyService } from './create-survey.service';

describe('CreateSurveyService', () => {
  let service: CreateSurveyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateSurveyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
