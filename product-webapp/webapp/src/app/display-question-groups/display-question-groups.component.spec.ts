import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayQuestionGroupsComponent } from './display-question-groups.component';

describe('DisplayQuestionGroupsComponent', () => {
  let component: DisplayQuestionGroupsComponent;
  let fixture: ComponentFixture<DisplayQuestionGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayQuestionGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayQuestionGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
