import { TestBed } from '@angular/core/testing';

import { CreateQuesGroupService } from './create-ques-group.service';

describe('CreateQuesGroupService', () => {
  let service: CreateQuesGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateQuesGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
