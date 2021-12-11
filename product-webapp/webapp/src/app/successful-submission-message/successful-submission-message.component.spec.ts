import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulSubmissionMessageComponent } from './successful-submission-message.component';

describe('SuccessfulSubmissionMessageComponent', () => {
  let component: SuccessfulSubmissionMessageComponent;
  let fixture: ComponentFixture<SuccessfulSubmissionMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfulSubmissionMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulSubmissionMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
