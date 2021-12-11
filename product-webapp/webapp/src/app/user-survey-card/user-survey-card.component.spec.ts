import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSurveyCardComponent } from './user-survey-card.component';

describe('UserSurveyCardComponent', () => {
  let component: UserSurveyCardComponent;
  let fixture: ComponentFixture<UserSurveyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSurveyCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSurveyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
