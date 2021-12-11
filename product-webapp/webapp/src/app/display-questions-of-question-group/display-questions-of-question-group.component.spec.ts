import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayQuestionsOfQuestionGroupComponent } from './display-questions-of-question-group.component';

describe('DisplayQuestionsOfQuestionGroupComponent', () => {
  let component: DisplayQuestionsOfQuestionGroupComponent;
  let fixture: ComponentFixture<DisplayQuestionsOfQuestionGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayQuestionsOfQuestionGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayQuestionsOfQuestionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
